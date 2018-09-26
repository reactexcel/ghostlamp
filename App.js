import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Root, Dimensions} from 'react-native';
import SplashScreen from './src/component/splashScreen';
import HomeScreen from './src/component/homePage';
import LoginScreen from './src/component/LoginScreen';
import Signup from './src/modules/signup';
import VerifyInstaScreen from './src/component/info/verifyinsta';
import InfoScreen from './src/component/info/bioScreen';
import InstaLinkScreen from './src/component/info/linkInsta';
import { StackNavigator } from 'react-navigation'

export const AppScreen = StackNavigator({
  infoScreen: { screen: InfoScreen },
  splashScreen: { screen: SplashScreen },
  login: { screen: LoginScreen },
  signup: { screen: Signup },
  home: { screen: HomeScreen },
  linkInsta: { screen: InstaLinkScreen },
  verifyInsta: { screen: VerifyInstaScreen },
});


export default class App extends Component {
  render() {
    return (
        <AppScreen />
    );
  }
}