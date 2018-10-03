import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button, Item, Label, Input } from 'native-base';


export default class BasicInfo extends Component {
    static navigationOptions = {
        header:null
    };
  render() {
    return (
      <View style={styles.container}>
            <View style={{marginTop:5}} >
        <View style={[{marginTop:20,elevation:10,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15}} >
                <Item  floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>First Name</Label>
                    <Input value={''} onFocus={()=>{  }} onChangeText={(e)=>{  }} keyboardType={'email-address'} type={'email'} />
                </Item>
            </View>
        </View>
        <View style={[{elevation:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15}} >
                <Item floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>Last Name</Label>
                    <Input value={''} onFocus={()=>{  }} onChangeText={(e)=>{  }}  />
                </Item>
            </View>
        </View>
        <View style={[{borderBottomRightRadius:10,borderBottomLeftRadius:10,elevation:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15,paddingBottom:5}} >
                <Item floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>Date Of Birth</Label>
                    <Input value={''} onFocus={()=>{  }} onChangeText={(e)=>{  }} />
                </Item>
            </View>
        </View>
      </View>

    <View style={{marginTop:25,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:20}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center'}}   >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Save Change</Text>
          </Button>
          </View>
          <View style={{alignSelf:'center'}} >
          <Button  style={{ shadowOffset:{  width: 0,  height: 1,  },elevation:5,shadowColor: 'gray',shadowOpacity: 0.9, backgroundColor:'white',width:300,alignText:'center',justifyContent:'center'}} elevation={3} onPress={this.create} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center'}}  >Cancel Edit</Text>
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
    marginLeft:20,
    marginRight:20,
    marginTop:10,
  }
});
