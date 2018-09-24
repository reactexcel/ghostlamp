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


class Signup extends Component {
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
            isLoading:false,
            page: 0,
            isEmailValid:'',
            terms:false,
            policy:false,
        }
    }
  componentWillMount(){
      
  }

  componentWillReceiveProps(nextProps){

  }

  redirect = e => {
      this.props.navigation.navigate('login')
  }
  onChange = (type,e) => {
    if(type=='email'){
        this.setState({email:e})
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
  onFocus = e => {
    this.setState({focus:e})
  }
  next = e => {
      let page = this.state.page;
      console.log(page,'next')
      if(page == 3 ){
          this.props.navigation.navigate('infoScreen')
      } else {
          page = page + 1;
          console.log(page)
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
      console.log(this.state,'asdasd')
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
            />
        }
        { page == 2 && 
            <ConfirmPhoneScreen 
                state={this.state}
                next={this.next}
                back={this.back}
            />
        }
        { page == 3 &&
            <VerifyPhoneScreen
                state={this.state}
                next={this.next}
                back={this.back}
            />

        }
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
    )(Signup);

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
