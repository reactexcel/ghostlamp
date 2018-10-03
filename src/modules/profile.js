import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button } from 'native-base';
import * as action from '../actions/index';
import * as helper from '../helper';
import Location from '../component/profile/location';
import BasicInfo from '../component/profile/basicInfo';


class Profile extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);        
        this.state = {
          selection:1
        }
    }

  componentWillReceiveProps(nextProps){

  }

  render() {
      let selection = this.state.selection;
    return (
      <View style={styles.container}>
        <Segment style={{marginTop:15}} >
          <Button first style={{width:140,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 0?true:false} onPress={()=>{ this.setState({selection:0}) }}  >
            <Text style={[selection == 0 ? {color:'white',fontSize:16}:{fontSize:16}]} >Profile Picture</Text>
          </Button>
          <Button style={{width:100,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 1?true:false} onPress={()=>{ this.setState({selection:1}) }} >
            <Text style={[selection == 1 ? {color:'white',fontSize:16}:{fontSize:16}]} >Basic Info</Text>
          </Button>
          <Button last style={{width:100,height:40,justifyContent:'center'}} active={selection == 2?true:false} onPress={()=>{ this.setState({selection:2}) }} >
            <Text style={[selection == 2 ? {color:'white',fontSize:16}:{fontSize:16}]} >Location</Text>
          </Button>
        </Segment>

        {
          selection == 1 &&
          <BasicInfo 
          />
        }
        {
          selection == 2 &&
          <Location 
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
