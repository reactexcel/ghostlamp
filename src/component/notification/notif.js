import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as action from '../../actions/index';
import * as helper from '../../helper';


class Notifications extends Component {
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

            <View style={{height:80,margin:14,borderBottomWidth:0.5,borderBottomColor:'gray'}} >
            <View style={{flexDirection:'row',flex:1}} >
                <View style={{justifyContent:'center',marginLeft:20,}} >
                  <Icon name="mail" />
                </View>
                <View style={{flex:1,marginTop:5,marginLeft:30}} >
                  <Text style={{alignItems:'center'}} >
                    You have earned new balance from last week total transaction
                  </Text>
                  <Text style={{fontSize:12,marginTop:5}} >
                    12 mins
                  </Text>
                </View>
            </View>
          </View>
      
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
    )(Notifications);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:20,
    marginRight:20,
    marginTop:10
  }
});
