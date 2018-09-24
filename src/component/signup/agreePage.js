import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';

export default class AgreeScreen extends Component {
    static navigationOptions = {
        header:null
    };
  componentWillMount(){
      
  }
  render() {
    const {
        terms,
        policy
    } = this.props.state;
    const { next, back } = this.props;
    return (
      <View style={styles.container}>
        <View style={{marginTop:50,marginLeft:25,flexDirection:'row'}} >
            <TouchableOpacity onPress={back} >
            <Icon name="md-arrow-back" style={{alignSelf:'center',color:'#3E88FB'}} size={8} />
            <Text style={{fontSize:18,color:'#3E88FB',alignSelf:'center'}} > Back </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{marginLeft:25,fontSize:25,fontWeight:'500',marginTop:10}} > Before we continue </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:14,fontSize:17}} > You must read and accept Ghostlamp's </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:5,fontSize:17}} > Terms and privacy policy </Text>
        </View>
        <View style={{marginTop:25}} >
            <View style={{flexDirection:'row',marginLeft:30,marginRight:30,paddingBottom:10}}  >
            { terms?
                    <View style={{height:15,width:15}} >
                    <Icon name="checkmark-circle" style={{height:20,width:20,fontSize:18,color:'green'}}  onPress={()=>{  }} />
                    </View>
                :
                    <TouchableOpacity onPress={()=>{ }} >
                        <View style={{borderWidth:1,borderRadius:20,height:15,width:15,borderColor:'gray'  }} />
                    </TouchableOpacity>
                }
                    <Text> I agree to Ghostlamp's Terms </Text>                
            </View>

            <View style={{flexDirection:'row',marginLeft:30,marginRight:30,marginTop:10,paddingBottom:10}}  >
            { policy?
                    <View style={{height:15,width:15}} >
                    <Icon name="checkmark-circle" style={{height:20,width:20,fontSize:18,color:'green'}}  onPress={()=>{  }} />
                    </View>
                :
                    <TouchableOpacity onPress={()=>{   }} >
                        <View style={{borderWidth:1,borderRadius:20,height:15,width:15,borderColor:'gray'  }} />
                    </TouchableOpacity>
                }
                    <Text> I agree to Ghostlamp's Privacy policy </Text>                
            </View>
        
        </View>
        <View style={{flex:1,marginTop:35,alignItems:'center'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:25}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center'}} onPress={next} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Continue</Text>
          </Button>
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
    backgroundColor: 'white',
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
