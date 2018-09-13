import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import SplashScreen from './src/component/splashScreen';
import HomeScreen from './src/component/homePage';
import { StackNavigator } from 'react-navigation'

export const AppScreen = StackNavigator({
  splashScreen: { screen: SplashScreen },
  home: { screen: HomeScreen }
});


export default class App extends Component {
  render() {
    return (
        <AppScreen />
    );
  }
}