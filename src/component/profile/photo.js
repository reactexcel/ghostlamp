import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Container, Header, Content, Segment, Button } from 'native-base';
import PicProfile from '../../images/profilePic.png'


export default class ProfilePic extends Component {
    static navigationOptions = {
        header:null
    };
  render() {
      const {
          photo
      } = this.props.state;
      const { addImage } = this.props;
      let url
      if(photo != '')
       url = `data:image/${photo.fileName.split('.')[1]};base64,${photo.data}`
    return (
      <View style={styles.container}>
            <View style={{alignItems:'center'}} >
            <TouchableOpacity onPress={addImage} >
               { photo == ''?
                <Image
                    source={require('../../images/profilePic.png')}
                    style={{height:130,width:130,borderRadius:10,marginTop:50}}
                />
                :
                <Image
                    source={{
                        uri: url
                      }}
                    style={{height:130,width:130,borderRadius:10,marginTop:50}}
                />
                }
            </TouchableOpacity>

                <Text style={{fontSize:17,marginTop:60}} >
                    Upload Profile Picture
                </Text>
                
                <Text style={{marginTop:5,color:'gray'}} >
                    Image size must be below 5mb
                </Text>

                <Button block style={{marginTop:20,alignText:'center',justifyContent:'center',backgroundColor:'lightgray'}} onPress={()=>{  }} >
                    <Text style={{fontSize:18,fontWeight:'400',alignSelf:'center',color:'#5C6881'}} >Upload Photo</Text>
                </Button>

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
