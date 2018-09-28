import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button } from 'native-base';
import * as action from '../../actions/index';
import * as helper from '../../helper';


class Profile extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);        
    }

  componentWillReceiveProps(nextProps){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
        Profile
        </Text>
      </View>
    );
  }
}




const mapStateToProps = state => ({
    user: state.login
})

export default connect(
    mapStateToProps,
    action,
    )(Profile);

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
