import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button, Label } from 'native-base';

export default class VerifyPhoneScreen extends Component {
    static navigationOptions = {
        header:null
    };
  componentWillMount(){
      
  }
  render() {
    const {
        focus,
    } = this.props.state;
    let codeStyle = focus == 'code' ? {backgroundColor:'white'} :{backgroundColor:'#EDF2F5'}    
    const { next, back, onFocus } = this.props;
    return (
      <View style={styles.container}>
        <View style={{marginTop:50,marginLeft:25,flexDirection:'row'}} >
            <TouchableOpacity onPress={back} style={{flexDirection:'row'}} >
            <Icon name="md-arrow-back" style={{alignSelf:'center',color:'#3E88FB'}} size={8} />
            <Text style={{fontSize:18,color:'#3E88FB',alignSelf:'center'}} > Back </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{marginLeft:25,fontSize:25,fontWeight:'500',marginTop:10}} > Enter 4-Digit Code </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:14,fontSize:17}} > We sent a code to number. Enter the </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:5,fontSize:17}} > code in that message. </Text>
        </View>
        <View style={{marginTop:25}} >
        <View style={[{marginLeft:30,marginRight:30,marginTop:30,borderRadius:10,elevation:5,height:90,justifyContent:'center'},codeStyle]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:10,justifyContent:'center'}} >
                <Item floatingLabel style={{flex:1,marginRight:15,marginBottom:25,marginLeft:10,alignSelf:'center'}}  >
                    <Icon name="mail" style={{height:30,width:30}} />                  
                    <Label>4 Digit Code</Label>
                    <Input  onFocus={()=>{ onFocus('code') }} onChangeText={(e)=>{ }} keyboardType={'numeric'}  />
                </Item>
            </View>
        </View>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:25}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center',backgroundColor:'#37A1F6'}} onPress={next} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Verify & Signup</Text>
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
