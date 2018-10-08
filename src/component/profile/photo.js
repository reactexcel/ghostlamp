import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button } from 'native-base';


export default class ProfilePic extends Component {
    static navigationOptions = {
        header:null
    };
  render() {
    return (
      <View style={styles.container}>
            <View style={{alignItems:'center'}} >
                <Image
                    style={{height:150,width:150,borderRadius:10,borderWidth:1,marginTop:80}}
                />

                <Text style={{fontSize:17,marginTop:20}} >
                    Upload Profile Picture
                </Text>
                
                <Text style={{marginTop:5,color:'gray'}} >
                    Image size must be below 5mb
                </Text>

                <Button block style={{marginTop:20,alignText:'center',justifyContent:'center',backgroundColor:'lightgray'}} onPress={()=>{  }} >
                    <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'#5C6881'}} >Upload Photo</Text>
                </Button>

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
