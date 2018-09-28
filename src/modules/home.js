import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button, Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as action from '../actions/index';
import * as helper from '../helper';
import Balance from '../component/home/balance';
import DemoGraphics from '../component/home/dempgraphic';
import Actions from '../component/home/actions';



class Home extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props){
        super(props);
        this.state = {
          selection:1,
          isShow:true,
        }
        
    }

  componentWillReceiveProps(nextProps){

  }

  redirect = e => {
      this.props.navigation.navigate('login')
  }
    
  render() {
    const { selection, isShow } = this.state;
    return (
      <View style={styles.container}>
          <Segment style={{marginTop:15}} >
          <Button first style={{width:100,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 0?true:false} onPress={()=>{ this.setState({selection:0}) }}  >
            <Text style={[selection == 0 ? {color:'white',fontSize:16}:{fontSize:16}]} >Balance</Text>
          </Button>
          <Button style={{width:100,height:40,borderRightWidth:0,justifyContent:'center'}} active={selection == 1?true:false} onPress={()=>{ this.setState({selection:1}) }} >
            <Text style={[selection == 1 ? {color:'white',fontSize:16}:{fontSize:16}]} >Actions</Text>
          </Button>
          <Button last style={{width:150,height:40,justifyContent:'center'}} active={selection == 2?true:false} onPress={()=>{ this.setState({selection:2}) }} >
            <Text style={[selection == 2 ? {color:'white',fontSize:16}:{fontSize:16}]} >Demographics</Text>
          </Button>
        </Segment>
          { isShow &&
          <View style={{margin:20, backgroundColor:'#37A1F6',borderRadius:10,justifyContent:'space-between',flexDirection:'row',flex:0.2}} >
            <View style={{margin:20}} >
              <Text style={{color:'white'}} > 
                Hello Influencer, if you have not filled in 
              </Text>                
              <Text style={{color:'white'}} >                 
                all the info you can do it here.
              </Text>
            </View>
            <View style={{marginRight:20,justifyContent:'center',alignItems:'center',}} >
              <Icon name='times-circle' size={25} style={{color:'white'}} onPress={()=>{this.setState({isShow:false})}} />
            </View>
          </View>
          }

        {selection == 0 &&
          <Balance 
          />
        }
        {selection == 1 && 
          <Actions
          />
        }
        {selection == 2 &&
          <DemoGraphics
          />
        }
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
    )(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
  }
});