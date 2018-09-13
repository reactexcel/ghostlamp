import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    };
  componentWillMount(){
    setTimeout(()=>{
        this.props.navigation.navigate('home')
      },1000)
  }
  render() {
    let widths = width - 60;
    return (
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:'flex-end'}} >
          <Text style={{color:'white',fontSize:35,justifyContent:'center',alignSelf:'center'}} >ghostlamp</Text>
        </View>
        <View style={{flex:1,justifyContent:'flex-end'}} >
          <View style={{marginLeft:20,marginRight:20,marginBottom:80,height:4,borderColor:'white',borderWidth:2,width:widths}}  / >
          <Text style={{color:'white',alignSelf:'center',paddingBottom:80}} > Loading 57 % </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D9DF0',
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
