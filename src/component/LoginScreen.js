import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as action from '../actions/index';
import * as helper from '../helper';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button, Label } from 'native-base';

class LoginScreen extends Component {
    static navigationOptions = {
        header:null
    };
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
      console.log(this.props,'check props on mount')
  }
  componentWillReceiveProps(nextProps){
      console.log(nextProps.login.login,'cascas')
      if(nextProps.login.login.isLoading){
        this.setState({isLoading:true});
      }
      if(nextProps.login.login.isSuccess){
          this.setState({isLoading:false})
      }
  }
  create = e => {
      this.props.navigation.navigate('signup')
  }
  onSubmit = e => {
      if(this.state.email == '' && this.state.password == '' ) {
          this.setState({
              isEmailValid:false,
              isPassword: true,
              isError: ' Please Fill Email and Password'
          })
      } else if (this.state.isEmailValid !== false ) {
          //call api
          const payload = {
              email:this.state.email,
              password: this.state.password
          }
          this.props.loginRequest(payload)
      }
  }
  checkEmail = e => {
      //check regex for email and set state
      let check = helper.validateEmail(e);
      if(!check){
          this.setState({isEmailValid:false})
      } else if (check) {
          this.setState({isEmailValid:true})
      }
  }
  back = e => {
      this.props.navigation.goBack()
  }
  render() {
    const { focus } = this.state;
    let emailStyle = focus == 'email' ? {backgroundColor:'white'} :{backgroundColor:'#EDF2F5'}
    let passwordStyle = focus == 'password' ? {backgroundColor:'white'} :{backgroundColor:'#EDF2F5'}
    return (
      <View style={styles.container}>
        <View style={{marginTop:50,marginLeft:25,flexDirection:'row'}} >
            <TouchableOpacity style={{flexDirection:'row'}} onPress={this.back} >        
            <Icon name="md-arrow-back" style={{alignSelf:'center',color:'#3E88FB'}} size={8} />
            <Text style={{fontSize:18,color:'#3E88FB',alignSelf:'center'}} > Back </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{marginLeft:25,fontSize:30,fontWeight:'500',marginTop:10}} > Keep Connected </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:14,fontSize:17}} > Enter Your Email address and </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:5,fontSize:17}} > password to get access your account. </Text>
        </View>
        <View style={{marginTop:25}} >
        <View style={[{marginLeft:30,marginRight:30,marginTop:30,backgroundColor:'#EDF2F5',elevation:10,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center'},emailStyle]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15}} >
                <Item success={this.state.isEmailValid? true:false} error={this.state.isEmailValid === false ? true: false} floatingLabel style={{flex:1,marginRight:15}} >
                    <Icon name="mail" style={{height:30,width:30}} />
                    <Label>Email Address</Label>
                    <Input value={this.state.email} onFocus={()=>{this.setState({focus:'email'})}} onChangeText={(e)=>{this.setState({email:e}); this.checkEmail(e)}} keyboardType={'email-address'} type={'email'} />
                    {this.state.isEmailValid ? <Icon name="checkmark-circle" style={{height:30,width:30,color:'green'}} />: this.state.isEmailValid === false ? <Icon name="close-circle" style={{height:30,width:30,color:'red'}} /> : null}
                </Item>
            </View>
        </View>
        <View style={[{marginLeft:30,marginRight:30,borderBottomRightRadius:10,borderBottomLeftRadius:10,elevation:5,justifyContent:'center'},passwordStyle]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15,paddingBottom:10}} >
                <Item floatingLabel style={{flex:1,marginRight:15}} error={this.state.isPassword? true: false} >
                    <Icon name="lock" style={{height:30,width:30}} />
                    <Label>Password</Label>
                    <Input value={this.state.password} onFocus={()=>{this.setState({focus:'password'})}} onChangeText={(e)=>{this.setState({password:e})}} secureTextEntry={true} />
                    {this.state.isPassword ? <Icon name="close-circle" style={{height:30,width:30,color:'red'}} /> : null}
                </Item>
            </View>
        </View>
        <View style={{marginLeft:25,marginRight:30,marginTop:2,justifyContent:'center'}} >
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginTop:20,paddingBottom:10}} >
                <View style={{flexDirection:'row'}} >
                { this.state.isRemember?
                    <View style={{height:15,width:15}} >
                    <Icon name="checkmark-circle" style={{height:20,width:20,fontSize:18,color:'green'}}  onPress={()=>{this.setState({isRemember:false})}} />
                    </View>
                :
                    <TouchableOpacity onPress={()=>{ this.setState({isRemember:true})}} >
                        <View style={{borderWidth:1,borderRadius:20,height:15,width:15,borderColor:'gray'  }} />
                    </TouchableOpacity>
                }
                    <Text style={{color:'gray'}} > Remember Me </Text>
                </View>
                <View style={{justifyContent:'flex-end'}} >
                    <Text style={{color:'gray'}} > Forget Password? </Text>
                </View>
            </View>
        </View>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:25}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center'}} onPress={this.onSubmit} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Get Login</Text>
          </Button>
          </View>
          <View style={{alignSelf:'center'}} >
          <Button  style={{ shadowOffset:{  width: 0,  height: 1,  },elevation:5,shadowColor: 'gray',shadowOpacity: 0.9, backgroundColor:'white',width:300,alignText:'center',justifyContent:'center'}} elevation={3} onPress={this.create} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center'}}  >Create Account</Text>
          </Button>
          </View>
          </View>          
        </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    login: state.login
})

export default connect(
    mapStateToProps,
    action,
    )(LoginScreen);

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
