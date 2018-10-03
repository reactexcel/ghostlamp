import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Segment, Button } from 'native-base';


export default class Actions extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={{flex:0.1,flexDirection:'row',justifyContent:'space-between'}} >
                <View style={{justifyContent:'center'}} >
                <Text style={{fontSize:21}} > Pending Action </Text>
                </View>
                <View style={{justifyContent:'center'}} >
                    <Text style={{color:'#37A1F6'}} >See All </Text>
                </View>
            </View>
            <View style={{marginTop:10}} >

              <View style={{backgroundColor:'white',borderWidth:0.3,height:50,borderColor:'gray',borderLeftWidth:0,borderRightWidth:0}} >
                <View style={{flexDirection:'row',flex:1}} >
                  <View style={{justifyContent:'center',marginLeft:20}} >
                    <Text style={{color:'#37A1F6'}} >Verified</Text>
                  </View>
                  <View style={{justifyContent:'center',marginLeft:20,width:135,}} >
                    <Text style={{alignItems:'center'}} >
                      You have 395 days 
                      to take action
                    </Text>
                  </View>
                  <View style={{flex:1,marginLeft:10,justifyContent:'center'}} >
                  <View style={{flexDirection:'row'}} >
                      <Icon name="dollar" size={15} color='gray' />
                      <Text style={{color:'gray',marginLeft:5}} >76.95</Text>
                  </View>
                  </View>
                  <View style={{flex:0.1,justifyContent:'center',paddingRight:10}} >
                    <Icon name="ellipsis-v" size={20} color="gray" />
                  </View>
            </View>
          </View>

          <View style={{height:50}} >
            <View style={{flexDirection:'row',flex:1}} >
                <View style={{justifyContent:'center',marginLeft:20}} >
                  <Text style={{color:'#37A1F6'}} >Verified</Text>
                </View>
                <View style={{justifyContent:'center',marginLeft:20,width:135,}} >
                  <Text style={{alignItems:'center'}} >
                    You have 395 days 
                    to take action
                  </Text>
                </View>
                <View style={{flex:1,marginLeft:10,justifyContent:'center'}} >
                <View style={{flexDirection:'row'}} >
                      <Icon name="dollar" size={15} color='gray' />
                      <Text style={{color:'gray',marginLeft:5}} >76.95</Text>
                  </View>
                </View>
                <View style={{flex:0.1,justifyContent:'center',paddingRight:10}} >
                  <Icon name="ellipsis-v" size={20} color="gray" />
                </View>
            </View>
          </View>

              <View style={{backgroundColor:'white',borderWidth:0.3,height:50,borderColor:'gray',borderLeftWidth:0,borderRightWidth:0}} >
                <View style={{flexDirection:'row',flex:1}} >
                  <View style={{justifyContent:'center',marginLeft:20}} >
                    <Text style={{color:'#37A1F6'}} >Verified</Text>
                  </View>
                  <View style={{justifyContent:'center',marginLeft:20,width:135,}} >
                    <Text style={{alignItems:'center',color:'gray'}} >
                      You have 395 days 
                      to take action
                    </Text>
                  </View>
                  <View style={{flex:1,marginLeft:10,justifyContent:'center'}} >
                    <View style={{flexDirection:'row'}} >
                      <Icon name="dollar" size={15} color='gray' />
                      <Text style={{color:'gray',marginLeft:5}} >76.95</Text>
                  </View>
                  </View>
                  <View style={{flex:0.1,justifyContent:'center',paddingRight:10}} >
                    <Icon name="ellipsis-v" size={20} color="gray" />
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
