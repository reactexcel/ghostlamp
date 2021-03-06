import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import { Container, Header, Content, Segment, Button } from 'native-base';
import * as action from '../actions/index';
import * as helper from '../helper';
import Location from '../component/profile/location';
import BasicInfo from '../component/profile/basicInfo';
import ProfilePic from '../component/profile/photo';


class Profile extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);        
        this.state = {
          selection:0,
          photo:'',
          firstName:'',
          focus:'',
          lastName:'',
          dateOfBirth:moment(),
          country:'',
          city:'',
          isDateTimePickerVisible: false,
          postalCode:''
        }
    }

  componentWillReceiveProps(nextProps){

  }

  onChange = (type,e) => {
    if(type=='firstName'){
        this.setState({
            firstName:e
        })
    } else if (type == 'lastName'){
        this.setState({
            lastName:e
        })
    } else if (type == 'dob'){
        this.setState({
            dateOfBirth:e
        })
    } else if (type == 'country'){
        this.setState({
            country:e
        })
    } else if (type == 'city'){
        this.setState({
            city:e
        })
    } else if (type == 'postalCode'){
        this.setState({
            postalCode:e
        })
    }
  }

  onFocus = e => {
    this.setState({focus:e})
  }
  _showDateTimePicker = e => {
    Keyboard.dismiss()    
    this.setState({ focus: e, isDateTimePickerVisible: true })
  }
  _hideDateTimePicker = () => {
    Keyboard.dismiss()
    this.setState({ isDateTimePickerVisible: false, focus:'' })
  }
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({ dateOfBirth: date })
    this._hideDateTimePicker();
  };

  addImage =e =>{
    var options = {
      title: 'Select Image for Restaurant',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }else {
        this.setState({photo:response})
      }
    });
  }


  render() {
      let selection = this.state.selection;
      const TextColor = Platform.OS == 'ios' ? 'white' : '#37A1F6';      
    return (
      <View style={styles.container}>
        <Segment style={Platform.OS == 'android'?{backgroundColor:'#37A1F6',marginTop:15}:{marginTop:15}} >
          <Button first style={Platform.OS == 'android' ? {width:140,height:40,borderColor:'gray',borderRightWidth:0,justifyContent:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10}:{width:140,borderColor:'gray',height:40,borderRightWidth:0,justifyContent:'center'}}  active={selection == 0?true:false} onPress={()=>{ this.setState({selection:0}) }}  >
            <Text style={[selection == 0 ? {color:TextColor,fontSize:16}:{fontSize:16}]} >Profile Picture</Text>
          </Button>
          <Button style={{width:100,borderColor:'gray',height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 1?true:false} onPress={()=>{ this.setState({selection:1}) }} >
            <Text style={[selection == 1 ? {color:TextColor,fontSize:16}:{fontSize:16}]} >Basic Info</Text>
          </Button>
          <Button last style={Platform.OS == 'android'?{width:100,height:40,borderColor:'gray',justifyContent:'center',borderBottomRightRadius:10,borderTopRightRadius:10}:{width:100,borderColor:'gray',height:40,justifyContent:'center'}} active={selection == 2?true:false} onPress={()=>{ this.setState({selection:2}) }} >
            <Text style={[selection == 2 ? {color:TextColor,fontSize:16}:{fontSize:16}]} >Location</Text>
          </Button>
        </Segment>

        {
          selection == 0 &&
          <ProfilePic 
            state={this.state}
            onFocus={this.onFocus}
            addImage={this.addImage}
          />
        }
        {
          selection == 1 &&
          <BasicInfo 
            state={this.state}
            onChange={this.onChange}
            onFocus={this.onFocus}
            showDateTimePicker={this._showDateTimePicker}
            hideDateTimePicker={this._hideDateTimePicker}
            handleDatePicked={this._handleDatePicked}
          />
        }
        {
          selection == 2 &&
          <Location 
            state={this.state}
            onChange={this.onChange}
            onFocus={this.onFocus}            
          />
        }
      </View>
    );
  }
}




const mapStateToProps = state => ({
    user: state.login
})

export default connect(
    mapStateToProps,
    action,
    )(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
