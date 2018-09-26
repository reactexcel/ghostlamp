import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as action from '../actions/index';
import * as helper from '../helper';
import SignupScreen from '../component/signup/signupPage';
import AgreeScreen from '../component/signup/agreePage';
import ConfirmPhoneScreen from '../component/signup/confirmPhone';
import VerifyPhoneScreen from '../component/signup/verifyPhone';
import { Switch } from 'native-base';


class Signup extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            confirmPassword:'',
            isEmailValid:'',
            isError:'',
            phone:'',
            focus:'',
            callingCode:'1',
            isRemember:false,
            isPhone:false,
            isPassword:false,
            isLoading:false,
            page: 0,
            isEmailValid:'',
            terms:false,
            policy:false,
        }
    }

  componentWillReceiveProps(nextProps){

  }

  redirect = e => {
      this.props.navigation.navigate('login')
  }
  onChange = (type,e) => {
    if(type=='email'){
        this.setState({
            email:e
        })
    } else if (type == 'confirmPassword'){
        this.setState({
            confirmPassword:e
        },()=>{
            this.checkPassword()
        })
    } else if (type == 'password'){
        this.setState({
            password:e
        })
    } else if (type == 'terms'){
        this.setState({
            terms: !this.state.terms
        })
    } else if (type == 'policy'){
        this.setState({
            policy: !this.state.policy
        })
    } else if (type == 'phone' ){
        this.setState({
            phone: e
        })
    } else if (type == 'callingCode'){
        this.setState({
            callingCode:e.callingCode
        })
    }
  }
  checkPassword = e => {
      if(this.state.password == this.state.confirmPassword ){
        this.setState({
            isPassword:false
        })
      } else {
          this.setState({
              isPassword: true
          })
      }
  }
  checkPhone = e => {
      // check phone number
      let check = helper.validatePhoneNo(e);
      this.setState({isPhone:!check})
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
  onFocus = e => {
    this.setState({focus:e})
  }
  next = e => {
    let page = this.state.page;
    let next = true;
    this.setState({focus:''})
    if(page == 0){
        if(this.state.email != '' && this.state.password != '' && this.state.confirmPassword != '' && isEmailValid){
            next = true;
            this.setState({
                isEmailValid: true
            })
        } else {
            next = false;
            if( this.state.password == '' && this.state.confirmPassword == ''){
                this.setState({
                    isPassword: true
                })
            }
            this.checkEmail(this.state.email);
        }
    } else if(page == 1){
        if ( this.state.terms && this.state.policy){
            next = true        
        } else {
            next = false;
        }
    } else if(page == 2){
        // fire api for signup
        if (this.state.phone != ''){
            next = true
        } else {
            next = false
        }
    } else if(page == 3){
        //fire api for code
        this.props.navigation.navigate('infoScreen')
    }

    if(next){
        page = page + 1;
        this.setState({ page })
    }
  }
  back = e => {
    let page = this.state.page;
    if ( page === 0 ){
        this.props.navigation.goBack()
    } else {
        page = page - 1;
        this.setState({ page })
    }
  }
  render() {
      const { page } = this.state;
    return (
      <View style={styles.container}>
        { page == 0 &&
            <SignupScreen 
            state={this.state}
            onChange={this.onChange}
            checkEmail={this.checkEmail}
            onFocus={this.onFocus}
            next={this.next}
            back={this.back}            
            redirect={this.redirect}
            />
        }
        { page == 1 &&
            <AgreeScreen 
                state={this.state}
                next={this.next}
                back={this.back}
                onChange={this.onChange}                
            />
        }
        { page == 2 && 
            <ConfirmPhoneScreen 
                state={this.state}
                next={this.next}
                onChange={this.onChange}
                checkPhone={this.checkPhone}        
                onFocus={this.onFocus}                
                back={this.back}
            />
        }
        { page == 3 &&
            <VerifyPhoneScreen
                state={this.state}
                next={this.next}
                onFocus={this.onFocus} 
                onChange={this.onChange}                
                back={this.back}
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
    )(Signup);

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
