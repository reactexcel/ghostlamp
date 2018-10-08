import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { Container, Header, Content, Segment, Button, Item, Label, Icon, Input } from 'native-base';


export default class Location extends Component {
    static navigationOptions = {
        header:null
    };
  render() {
    const {
        country,
        city,
        postalCode,
        focus
    } = this.props.state;
    const { onChange, onFocus } = this.props;
    return (
      <View style={styles.container}>
        <View style={{marginTop:5}} >
        <View style={[{marginTop:20,elevation:10,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15}} >
                <Item  floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>Country</Label>
                    <Input value={country} onFocus={()=>{ onFocus('country') }} onChangeText={(e)=>{ onChange('country',e) }} />
                </Item>
            </View>
        </View>
        <View style={[{elevation:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15}} >
                <Item floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>Town</Label>
                    <Input value={city} onFocus={()=>{ onFocus('city') }} onChangeText={(e)=>{ onchange('city',e) }}  />
                </Item>
            </View>
        </View>
        <View style={[{borderBottomRightRadius:10,borderBottomLeftRadius:10,elevation:10,justifyContent:'center',backgroundColor:'#EDF2F5'}]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:15,paddingBottom:5}} >
                <Item floatingLabel style={{flex:1,marginRight:15}} >
                    <Label>Postal Code</Label>
                    <Input value={postalCode} onFocus={()=>{ onFocus('postCode') }} onChangeText={(e)=>{ onChange('postalCode',e) }}  />
                </Item>
            </View>
        </View>
      </View>

    <View style={{marginTop:25,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:20}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center',backgroundColor:'#37A1F6'}}   >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Save Change</Text>
          </Button>
          </View>
          <View style={{alignSelf:'center'}} >
          <Button  style={{ shadowOffset:{  width: 0,  height: 1,  },elevation:5,shadowColor: 'gray',shadowOpacity: 0.9, backgroundColor:'white',width:300,alignText:'center',justifyContent:'center'}} elevation={3} onPress={this.create} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center'}}  >Cancel Edit</Text>
          </Button>
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
