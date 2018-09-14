import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';

export default class InstaLinkScreen extends Component {
    static navigationOptions = {
        header:null
    };
  componentWillMount(){
      
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text style={{marginLeft:25,fontSize:30,fontWeight:'500',marginTop:10}} > Link your Instagram Account </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:14,fontSize:17}} > 
                This step is essential. Type in your instagram
                handle and follow the confirmation process.
            </Text>
        </View>
        <View style={{marginTop:25}} >
        <View style={{marginLeft:30,marginRight:30,marginTop:30,borderTopRightRadius:10,borderTopLeftRadius:10,borderBottomWidth:0,borderColor:'gray',elevation:5,borderWidth:1,justifyContent:'center'}} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:25}} >
              
                <Icon name="mail" />
            </View>
        </View>
        <View style={{marginLeft:30,marginRight:30,borderBottomRightRadius:10,borderBottomLeftRadius:10,borderColor:'gray',borderTopWidth:0,elevation:5,borderWidth:1,justifyContent:'center'}} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:20,paddingBottom:10}} >
                <Icon name="lock" />
            </View>
        </View>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:25}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center'}} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Continue</Text>
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
