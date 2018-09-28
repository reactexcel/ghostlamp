import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button, Card, CardItem, Body } from 'native-base';


export default class Balance extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Content>
          <Card style={{borderRadius:10,borderWidth:0.4,borderColor:'gray'}} >
            <CardItem style={{borderWidth:0.4,borderTopLeftRadius:10,borderTopRightRadius:10,borderColor:'gray',backgroundColor:'white'}}>
            <View style={{flex:1}} >
              <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',flex:1}} >
                <View>
                    <Text style={{fontSize:17}} >
                    Balance
                    </Text>
                </View>
                <View>
                <Text style={{fontSize:17}} >
                    - - -
                </Text>
                </View>                
              </View>
              <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',flex:1}} >
                <View>
                    <Text style={{fontSize:17}} >
                    Pending Balance
                    </Text>
                </View>
                <View>
                <Text style={{fontSize:17}} >
                    $95.00
                </Text>
                </View>                
              </View>
              <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',flex:1}} >
                <View>
                    <Text style={{fontSize:17}} >
                    Balance in Review
                    </Text>
                </View>
                <View>
                <Text style={{fontSize:17}} >
                    $75.99
                </Text>
                </View>                
              </View>
              </View>
            </CardItem>
            <CardItem footer style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,borderWidth:0.4,borderColor:'gray',backgroundColor:'#EDF2F5'}}>
            <View style={{flexDirection:'row',marginTop:10,marginBottom:10,justifyContent:'space-between',flex:1}} >
                <View>
                    <Text style={{fontSize:17}} >
                    Total Earned
                    </Text>
                </View>
                <View>
                <Text style={{fontSize:17}} >
                    $275.99
                </Text>
                </View>                
              </View>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  }
});
