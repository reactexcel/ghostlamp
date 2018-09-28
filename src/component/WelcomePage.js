import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { Button } from 'native-base';


export default class WelcomeScreen extends Component {
    static navigationOptions = {
        header: null
    };
  redirect = e => {
      if(e == 'login'){
          this.props.navigation.navigate('login')
      } else if ( e == 'create') {
          this.props.navigation.navigate('signup')
      }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:'flex-end'}} >
          <View/>
        </View>
        <View style={{flex:1,justifyContent:'space-between'}} >
        <View>
          <Text style={{fontWeight:'600',marginTop:30,fontSize:23,alignSelf:'center',}} > Welcome to Ghostlamp </Text>
          <Text style={{alignSelf:'center',textAlign:'center',fontSize:17,marginTop:25,color:'gray'}} > A Workspace to over 12 Million influencers </Text>
          <Text style={{alignSelf:'center',textAlign:'center',fontSize:17,marginTop:8,color:'gray'}} > around the global of the world </Text>
         </View>
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:25}} >
          <Button style={{width:200,alignText:'center',justifyContent:'center'}} onPress={() => this.redirect('login')} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Login Now</Text>
          </Button>
          </View>
          <View style={{alignSelf:'center'}} >
          <Button  style={{ shadowOffset:{  width: 0,  height: 1,  },elevation:5,shadowColor: 'gray',shadowOpacity: 0.9, backgroundColor:'white',width:200,alignText:'center',justifyContent:'center'}} elevation={3} onPress={() => this.redirect('create')} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center'}}  >Create Account</Text>
          </Button>
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
    justifyContent: 'center',
    alignItems: 'center',
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
