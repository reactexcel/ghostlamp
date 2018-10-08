import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button, Label } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';


export default class ConfirmPhoneScreen extends Component {
    static navigationOptions = {
        header:null
    };
    constructor() {
        super();
    
        this.onPressFlag = this.onPressFlag.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.state = {
          cca2: 'US',
          callingCountry: '1'
        };
      }
  componentWillMount(){
      if(this.phone){
          this.setState({
                pickerData: this.phone.getPickerData()
            })
        }
  }

  onPressFlag(){
    this.countryPicker.openModal();
}

selectCountry(country) {
    console.log(country,'check')
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2, callingCountry:country.callingCode });
  }

  render() {
      const {
          phone,
          isPhone,
          focus
      } = this.props.state;
      const { next, back, onFocus, onChange, checkPhone } = this.props;
    let phoneStyle = focus == 'email' ? {backgroundColor:'white'} :{backgroundColor:'#EDF2F5'}      
    return (
      <View style={styles.container}>
        <View style={{marginTop:50,marginLeft:25,flexDirection:'row'}} >
            <TouchableOpacity style={{flexDirection:'row'}} onPress={back} >
            <Icon name="md-arrow-back" style={{alignSelf:'center',color:'#3E88FB'}} size={8} />
            <Text style={{fontSize:18,color:'#3E88FB',alignSelf:'center'}} > Back </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{marginLeft:25,fontSize:25,fontWeight:'500',marginTop:10}} > Confirm your Phone Number </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:14,fontSize:17}} > In order to get paid using Ghostlamp </Text>
            <Text style={{color:'gray',marginLeft:25,marginTop:5,fontSize:17}} > you need to confirm your phone </Text>
        </View>
        <View style={{marginTop:25}} >
        <View style={[{marginLeft:30,marginRight:30,marginTop:30,borderRadius:10,elevation:5,height:70,justifyContent:'center'},phoneStyle]} >
            <View style={{flexDirection:'row',marginLeft:20,marginTop:10,justifyContent:'center'}} >
            <Icon name="ios-call-outline" size={20} style={{height:30,width:30,marginRight:10,alignSelf:'center'}} />
                <PhoneInput
                ref={(ref) => { this.phone = ref; }}
                onPressFlag={this.onPressFlag}
                />
                 <CountryPicker
                    ref={(ref) => {
                        this.countryPicker = ref;
                    }}
                    onChange={value => this.selectCountry(value)}
                    translation="eng"
                    cca2={this.state.cca2}
                    >
                    <View />
                </CountryPicker>
                <Text style={{alignSelf:'center'}} >
                    +{this.state.callingCountry}
                </Text>
                <Item floatingLabel style={{flex:1,marginRight:15,marginBottom:25,marginLeft:10,alignSelf:'center'}} error={isPhone? true:false} >
                    <Label>Phone Number</Label>
                    <Input value={phone} onFocus={()=>{onFocus('phone')}} onChangeText={(e)=>{onChange('phone',e); checkPhone(e) }} keyboardType={'numeric'} type={""} />
                </Item>
            </View>
        </View>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <View style={{justifyContent:'space-between'}} >
          <View style={{alignSelf:'center',marginBottom:30}} >
          <View style={{alignSelf:'center',marginBottom:25}} >
          <Button style={{width:300,alignText:'center',justifyContent:'center',backgroundColor:'#37A1F6'}}  onPress={next} >
              <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'white'}} >Continue</Text>
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
