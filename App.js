import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Root, Dimensions, TouchableOpacity} from 'react-native';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from './src/component/splashScreen';
import WelcomeScreen from './src/component/WelcomePage';
import LoginScreen from './src/component/LoginScreen';
import Signup from './src/modules/signup';
import VerifyInstaScreen from './src/component/info/verifyinsta';
import InfoScreen from './src/component/info/bioScreen';
import InstaLinkScreen from './src/component/info/linkInsta';
import Home from './src/modules/home';
import Notifications from './src/component/notification/notif';
import Invites from './src/component/invite/invite';
import Profile from './src/modules/profile';
import Search from './src/component/search/search';

const homeView = StackNavigator({
  Home: { screen: Home , navigationOptions:{ header: null} },
  Search: { screen: Search }
}) 


const tabView =  createBottomTabNavigator(
  {
    Home: { screen: homeView },
    Invite: { screen: Invites },
    Notification: { screen: Notifications },
    Profile: { screen: Profile },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `briefcase`;
        } else if (routeName === 'Invite') {
          iconName = `envelope`;
        }else if (routeName === 'Notification') {
          iconName = `bell`;
        }else if (routeName === 'Profile') {
          iconName = `user`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} style={[focused?{color:'#3E88FB',marginTop:5}:{color:'gray',marginTop:5}]} size={25} color="#3E88FB" />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#3E88FB',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export const AppScreen = StackNavigator({
  home: { screen: tabView, navigationOptions:({navigation})=>{
    const { routes, index } = navigation.state;
    const navigationOptions = {};
    if(routes[index].routeName != 'Home'){
      navigationOptions.title = routes[index].routeName;
      navigationOptions.headerTitleStyle = Platform.OS == 'ios'? {textAlign:'center'} : {textAlign:'center',width:'83%'} 
      navigationOptions.headerLeft = Platform.OS == 'ios'? null : <View />;      
      navigationOptions.headerRight = <Icon name='search' size={15} style={{marginRight:15}} onPress={()=>{navigation.navigate('Search')}} />
    } else {
      const data = routes[index]
      if(data.routes[data.index].routeName == 'Home'){
        navigationOptions.title = data.routes[data.index].routeName;
        navigationOptions.headerTitleStyle = Platform.OS == 'ios'? {textAlign:'center'} : {textAlign:'center',width:'83%'} 
        navigationOptions.headerLeft = Platform.OS == 'ios'? null : <View />;
        navigationOptions.headerRight = <Icon name='search' size={15} style={{marginRight:15}} onPress={()=>{navigation.navigate('Search')}} />
      } else {
        navigationOptions.header = null;
      }
    }
      return navigationOptions;
  } },
  splashScreen: { screen: SplashScreen },
  welcomeScreen: { screen: WelcomeScreen },
  login: { screen: LoginScreen },
  signup: { screen: Signup },
  infoScreen: { screen: InfoScreen },
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