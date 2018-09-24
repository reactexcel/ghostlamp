import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button, Label } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as action from '../../actions/index';
import * as helper from '../../helper';


export default class SignupScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            isEmailValid:'',
            isError:'',
            isRemember:false,
            isPassword:false,
            isLoading:false
        }
    }
  componentWillMount(){
      
  }

  redirect = e => {
      this.props.navigation.navigate('login')
  }

  render() {
    const  {
        email,
        password,
        isEmailValid,
        isError,
        isRemember,
        isPassword,
        isLoading
    } = this.props.state;
    const { redirect, onChange, onFocus, checkEmail, next, back } = this.props;
    return (
      <View style={styles.container}>
        <View style={{marginTop:50,marginLeft:25,flexDirection:'row'}} >
            <TouchableOpacity onPress={back} >
            <Icon name="md-arrow-back" style={{alignSelf:'center',color:'#3E88FB'}} size={8} />
            <Text style={{fontSize:18,color:'#3E88FB',alignSelf:'center'}} > Back </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{marginLeft:25,fontSize:25,fontWeight:'500',marginTop:10}} > Create New Account </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:14,fontSize:17}} > Enter Your email address, password </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:5,fontSize:17}} > and bio to create account. </Text>
        </View>
        <View style={{marginTop:20}} >

            <View style={{marginLeft:30,marginRight:30,marginTop:30,borderTopRightRadius:10,borderTopLeftRadius:10,borderBottomWidth:0,borderColor:'gray',elevation:5,borderWidth:1,justifyContent:'center'}} >
                <View style={{flexDirection:'row',marginLeft:20,marginTop:25}} >
                    <Item success={isEmailValid? true:false} error={isEmailValid === false ? true: false} floatingLabel style={{flex:1,marginRight:15}} >
                        <Icon name="mail" style={{height:30,width:30}} />
                        <Label>Email Address</Label>
                        <Input value={email} onFocus={()=>{onFocus('email')}} onChangeText={(e)=>{onChange('email',e); checkEmail(e)}} keyboardType={'email-address'} type={'email'} />
                        {isEmailValid ? <Icon name="checkmark-circle" style={{height:30,width:30,color:'green'}} />: this.state.isEmailValid === false ? <Icon name="close-circle" style={{height:30,width:30,color:'red'}} /> : null}
                    </Item>
                </View>
            </View>
            <View style={{marginLeft:30,marginRight:30,borderBottomWidth:0,borderColor:'gray',borderTopWidth:0,elevation:5,borderWidth:1,justifyContent:'center'}} >
                <View style={{flexDirection:'row',marginLeft:20,marginTop:20,paddingBottom:10}} >
                    <Item floatingLabel style={{flex:1,marginRight:15}} error={this.state.isPassword? true: false} >
                        <Icon name="lock" style={{height:30,width:30}} />
                        <Label>Password</Label>
                        <Input value={password} onFocus={()=>{onFocus('password')}} onChangeText={(e)=>{onChange('password',e)}} secureTextEntry={true} />
                        {isPassword ? <Icon name="close-circle" style={{height:30,width:30,color:'red'}} /> : null}
                    </Item>
                </View>
            </View>

            <View style={{marginLeft:30,marginRight:30,borderBottomRightRadius:10,borderBottomLeftRadius:10,borderColor:'gray',borderTopWidth:0,elevation:5,borderWidth:1,justifyContent:'center'}} >
                <View style={{flexDirection:'row',marginLeft:20,marginTop:20,paddingBottom:10}} >
                    <Item floatingLabel style={{flex:1,marginRight:15}} error={isPassword? true: false} >
                        <Icon name="lock" style={{height:30,width:30}} />
                        <Label> Repeat Password</Label>
                        <Input value={password} onFocus={()=>{onFocus('confrimPassword')}} onChangeText={(e)=>{onChange('confirmPassword',e)}} secureTextEntry={true} />
                        <Icon name="eye-off" style={{height:30,width:30}} />
                        <Icon name="eye" style={{height:30,width:30}} />
                        {isPassword ? <Icon name="close-circle" style={{height:30,width:30,color:'red'}} /> : null}
                    </Item>
                </View>
            </View>

        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:25}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center',color:'#3E88FB'}} onPress={next} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Continue</Text>
          </Button>
          </View>
          <View style={{alignSelf:'center'}} >
          <Button  style={{ shadowOffset:{  width: 0,  height: 1,  },elevation:5,shadowColor: 'gray',shadowOpacity: 0.9, backgroundColor:'white',width:300,alignText:'center',justifyContent:'center'}} elevation={3} onPress={redirect} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center'}}  >Already have account</Text>
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
    backgroundColor: 'white',
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
