import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button } from 'native-base';


export default class PrifilePic extends Component {
    static navigationOptions = {
        header:null
    };
  render() {
    return (
      <View style={styles.container}>
            <View style={{flex:0.1,flexDirection:'row',justifyContent:'space-between'}} >
                <View style={{justifyContent:'center'}} >
                <Text style={{fontSize:21}} > Recent Search </Text>
                </View>
                <View style={{justifyContent:'center'}} >
                    <Text style={{color:'#37A1F6'}} >Clear </Text>
                </View>
            </View>
            <View style={{flex:1}} >

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
