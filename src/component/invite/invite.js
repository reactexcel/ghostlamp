import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button } from 'native-base';
import * as action from '../../actions/index';
import * as helper from '../../helper';


class Invites extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);        
    }

  componentWillReceiveProps(nextProps){

  }

  render() {
      let selection = 2;
    return (
      <View style={styles.container}>
        <Segment style={{marginTop:15}} >
          <Button first style={{width:100,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 0?true:false} onPress={()=>{ this.setState({selection:0}) }}  >
            <Text style={[selection == 0 ? {color:'white',fontSize:16}:{fontSize:16}]} >All Invite</Text>
          </Button>
          <Button style={{width:80,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 1?true:false} onPress={()=>{ this.setState({selection:1}) }} >
            <Text style={[selection == 1 ? {color:'white',fontSize:16}:{fontSize:16}]} >Accepted</Text>
          </Button>
          <Button style={{width:80,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 2?true:false} onPress={()=>{ this.setState({selection:2}) }} >
            <Text style={[selection == 2 ? {color:'white',fontSize:16}:{fontSize:16}]} >Rejected</Text>
          </Button>
          <Button last style={{width:80,height:40,justifyContent:'center'}} active={selection == 3?true:false} onPress={()=>{ this.setState({selection:3}) }} >
            <Text style={[selection == 3 ? {color:'white',fontSize:16}:{fontSize:16}]} >Expired</Text>
          </Button>
        </Segment>
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
    )(Invites);

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
