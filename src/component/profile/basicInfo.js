import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import { Container, Header, Content, Segment, Button, Item, Label, Input } from 'native-base';


export default class BasicInfo extends Component {
    static navigationOptions = {
        header:null
    };
  render() {
    const {
        firstName,
        lastName,
        dateOfBirth,
        focus,
        isDateTimePickerVisible
    } = this.props.state;
    const { onChange, onFocus, handleDatePicked, hideDateTimePicker, showDateTimePicker } = this.props;
    return (
      <View style={styles.container}>
            <View style={{marginTop:5}} >
        <View style={[{marginTop:20,elevation:10,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15}} >
                <Item  floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>First Name</Label>
                    <Input value={firstName} onFocus={()=>{ onFocus('firstname') }} onChangeText={(e)=>{ onChange('firstName',e) }} />
                </Item>
            </View>
        </View>
        <View style={[{elevation:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15}} >
                <Item floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>Last Name</Label>
                    <Input value={lastName} onFocus={()=>{ onFocus('lastName') }} onChangeText={(e)=>{ onchange('lastName',e) }}  />
                </Item>
            </View>
        </View>
        <View style={[{borderBottomRightRadius:10,borderBottomLeftRadius:10,elevation:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15,paddingBottom:5}} >
                <Item floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>Date Of Birth</Label>
                    <Input value={moment(dateOfBirth).format('MMMM DD, YYYY')} caretHidden={true} onFocus={()=> showDateTimePicker('dob') } onChangeText={(e)=>{  }} />
                </Item>
            </View>
        </View>
      </View>
    <DateTimePicker
    isVisible={isDateTimePickerVisible}
    maximumDate={new Date()}
    onConfirm={handleDatePicked}
    onCancel={hideDateTimePicker}
    />

    <View style={{marginTop:25,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:20}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center',backgroundColor:'#37A1F6'}}   >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Save Change</Text>
          </Button>
          </View>
          <View style={{alignSelf:'center'}} >
          <Button  style={{ shadowOffset:{  width: 0,  height: 1,  },elevation:5,shadowColor: 'gray',shadowOpacity: 0.9, backgroundColor:'white',width:300,alignText:'center',justifyContent:'center'}} elevation={3} onPress={this.create} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center'}}  >Cancel Edit</Text>
          </Button>
          </View>
          </View>          
        </View>
    </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:20,
    marginRight:20,
    marginTop:10,
  }
});
