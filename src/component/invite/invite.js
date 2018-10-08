import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import moment from 'moment';
import { Container, Header, Content, Segment, Button } from 'native-base';
import * as action from '../../actions/index';
import * as helper from '../../helper';

const { width, height } = Dimensions.get('window');

class Invites extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);   
        this.state = {
          selection: 0
        }     
    }

  componentWillReceiveProps(nextProps){

  }

  render() {
      let selection = this.state.selection;
      const TextColor = Platform.OS == 'ios' ? 'white' : '#37A1F6';      
    return (
      <View style={styles.container}>
        <Segment style={Platform.OS == 'android'?{backgroundColor:'#37A1F6',marginTop:15}:{marginTop:15}}  >
          <Button first style={Platform.OS == 'android' ? {width:90,height:40,borderRightWidth:0,justifyContent:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10}:{width:90,height:40,borderRightWidth:0,justifyContent:'center'}}  active={selection == 0?true:false} onPress={()=>{ this.setState({selection:0}) }}  >
            <Text style={[selection == 0 ? {color:TextColor,fontSize:16}:{fontSize:16}]} >All Invite</Text>
          </Button>
          <Button style={{width:80,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 1?true:false} onPress={()=>{ this.setState({selection:1}) }} >
            <Text style={[selection == 1 ? {color:TextColor,fontSize:16}:{fontSize:16}]} >Accepted</Text>
          </Button>
          <Button style={{width:80,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 2?true:false} onPress={()=>{ this.setState({selection:2}) }} >
            <Text style={[selection == 2 ? {color:TextColor,fontSize:16}:{fontSize:16}]} >Rejected</Text>
          </Button>
          <Button last style={Platform.OS == 'android'?{width:100,height:40,justifyContent:'center',borderBottomRightRadius:10,borderTopRightRadius:10}:{width:100,height:40,justifyContent:'center'}} active={selection == 3?true:false} onPress={()=>{ this.setState({selection:3}) }} >
            <Text style={[selection == 3 ? {color:TextColor,fontSize:16}:{fontSize:16}]} >Expired</Text>
          </Button>
        </Segment>
        <View style={{margin:20, flexDirection:'row'}} >

        <View style={{marginTop:20,marginRight:5,borderWidth:1,borderColor:'gray',width:width/2-30,height:220,borderRadius:5  }} >
            <Image
              style={{height:140,borderWidth:1}}
            />
            <Text style={{margin:4,}} >
              Amazon Gift card
            </Text>
            <Text style={{margin:4}} >
              Expiry: {moment().format('MMM DD, YYYY')} 
            </Text>
            <Text style={{margin:4}} >
              $ 76.85
            </Text>
        </View>

        <View style={{marginTop:20,marginLeft:5,borderWidth:1,borderColor:'gray',width:width/2-15,height:220,borderRadius:5  }} >
          <Image
              style={{height:140,borderWidth:1}}
            />
            <Text style={{margin:4,}} >
              Amazon Gift card
            </Text>
            <Text style={{margin:4}} >
              Expiry: {moment().format('MMM DD, YYYY')} 
            </Text>
            <Text style={{margin:4}} >
              $ 76.85
            </Text>
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
