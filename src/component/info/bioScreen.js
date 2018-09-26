import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button, Label } from 'native-base';

export default class InfoScreen extends Component {
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
            <Text style={{marginLeft:25,fontSize:25,fontWeight:'500',marginTop:10}} > Let's Get Started </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:14,fontSize:17,lineHeight:25 }} > 
                Ghostlamp works hard to preserve the
                authenticity in influecing, and we go to great
                lengths to find infulencers who really love the 
                product or service they are promoting.
                There are few more things we need to know to
                make that happen.
            </Text>
        </View>
        <View style={{marginLeft:25,marginTop:25}} >
            <Text style={{fontSize:20,fontWeight:'600'}} >Step 1 of 3</Text>
        </View>
        <View style={{marginTop:15}} >
        <View style={{marginLeft:30,marginRight:30,marginTop:30,borderTopRightRadius:10,borderTopLeftRadius:10,borderBottomWidth:0,elevation:5,backgroundColor:'#EDF2F5',justifyContent:'center'}} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:5}} >
                <Item floatingLabel style={{flex:1,marginRight:15,marginBottom:25,marginLeft:10,alignSelf:'center'}} >
                    <Label>First Name</Label>
                    <Input  onFocus={()=>{ }} onChangeText={(e)=>{  }} type={""} />
                </Item>
            </View>
        </View>
        <View style={{marginLeft:30,marginRight:30,borderBottomRightRadius:10,borderBottomLeftRadius:10,borderTopWidth:0,elevation:5,justifyContent:'center',backgroundColor:'#EDF2F5'}} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:5}} >
                <Item floatingLabel style={{flex:1,marginRight:15,marginBottom:25,marginLeft:10,alignSelf:'center'}}  >
                    <Label>Last Name</Label>
                    <Input  onFocus={()=>{ }} onChangeText={(e)=>{  }} type={""} />
                </Item>
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
