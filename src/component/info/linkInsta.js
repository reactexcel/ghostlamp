import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button, Label } from 'native-base';

export default class InstaLinkScreen extends Component {
    static navigationOptions = {
        header:null
    };
  componentWillMount(){
      
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop:50,marginLeft:25,flexDirection:'row'}} />            
        <View>
            <Text style={{marginLeft:25,marginRight:15,fontSize:25,fontWeight:'500',marginTop:10}} > 
                Linked your Instagram
                Account
             </Text>
            <Text style={{color:'gray',marginLeft:25,marginRight:5,marginTop:14,fontSize:17,lineHeight:25}} > 
                This step is essential. Type in your instagram
                handle and follow the confirmation process.
            </Text>
        </View>
        <View style={{marginTop:25}} >
        <View style={{marginLeft:30,marginRight:30,marginTop:30,borderRadius:10,elevation:5,height:70,justifyContent:'center',backgroundColor:'#EDF2F5'}} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:5}} >
            <Item floatingLabel style={{flex:1,marginRight:15,marginBottom:25,marginLeft:10,alignSelf:'center'}}  >
                    <Label>Profile Url</Label>
                    <Input  onFocus={()=>{ }} onChangeText={(e)=>{  }} type={""} />
                </Item>
            </View>
        </View>
        </View>
        <View style={{flex:1,marginTop:40,alignItems:'center'}} >
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
