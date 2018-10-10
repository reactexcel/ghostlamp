import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Title,Content, Segment,  Button,Left, Right, Body,Item, Input } from 'native-base';


export default class Search extends Component {
    static navigationOptions = {
        header:null
    };
  render() {
    return (
      <View style={styles.mail}>
            <Header span >
              <Left>
                <Button transparent>
                  { Platform.OS == 'android' ?<Icon name="arrow-back" />:null}
                </Button>
              </Left>
              <Body style={{justifyContent:'center',alignItems:'center'}} >
                <Title> Search </Title>
                <View style={{margin:20,width:270 ,height:20  }} >
                <Item rounded style={{backgroundColor:'lightgray',height:40}} >
                  <Icon name='search' style={{marginLeft:15,color:'gray'}} size={15} />
                  <Input placeholder='Type anything'/>
                </Item>
                </View>
              </Body>
              <Right >
                <Icon name='search' size={15} style={{marginRight:15,marginTop:10}} onPress={()=>{navigation.navigate('Search')}} />
              </Right>
            </Header>
            <View style={styles.container} >
            <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                <View style={{justifyContent:'center'}} >
                <Text style={{fontSize:21}} > Recent Search </Text>
                </View>
                <View style={{justifyContent:'center'}} >
                    <Text style={{color:'#37A1F6'}} >Clear </Text>
                </View>
            </View>
            <View style={{flex:1}} >
              // flat list for result
            </View>
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginLeft:20,
    marginRight:20,
    marginTop: 20 
  },
  main: {
    flex:1
  }

});
