import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Root, Dimensions} from 'react-native';
import SplashScreen from './src/component/splashScreen';
import HomeScreen from './src/component/homePage';
import LoginScreen from './src/component/LoginScreen';
import Signup from './src/modules/signup';
import VerifyPhoneScreen from './src/component/signup/verifyPhone';
import ConfirmPhoneScreen from './src/component/signup/confirmPhone';
import AgreeScreen from './src/component/signup/agreePage';
import VerifyInstaScreen from './src/component/info/verifyinsta';
import InfoScreen from './src/component/info/bioScreen';
import InstaLinkScreen from './src/component/info/linkInsta';
import { StackNavigator } from 'react-navigation'

export const AppScreen = StackNavigator({
  splashScreen: { screen: SplashScreen },
  login: { screen: LoginScreen },
  signup: { screen: Signup },
  home: { screen: HomeScreen },
  verifyPhone: { screen: VerifyPhoneScreen },
  confirmPhone: { screen: ConfirmPhoneScreen },
  agreeScreen: { screen: AgreeScreen },
  verifyInsta: { screen: VerifyInstaScreen },
  linkInsta: { screen: InstaLinkScreen },
  infoScreen: { screen: InfoScreen },
});


export default class App extends Component {
  render() {
    return (
        <AppScreen />
    );
  }
}