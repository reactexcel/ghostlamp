import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button } from 'native-base';


export default class DemoGraphics extends Component {    
  render() {
    return (
      <View style={styles.container}>
          <Text>DemoGraphics</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
    margin:20
  }
});
