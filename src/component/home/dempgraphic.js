import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import PieChart from 'react-native-pie-chart';
import { Container, Header, Content, Segment, Button } from 'native-base';


export default class DemoGraphics extends Component {    
  render() {
    const chart_wh = 220
    const series = [  589, 737]
    const sliceColor = [ '#37A1F6', '#FF9800']

    return (
      <View style={styles.container}>
        <Content>
          <Text style={{fontSize:18,fontWeight:'500'}} >Gender</Text>
          <View style={{backgroundColor:'white',borderRadius:10,shadowOffset:{  width: 0,  height: 1,  },elevation:5,shadowColor: 'gray',shadowOpacity: 0.9,marginTop:20,marginBottom:20}} >
              <View style={{justifyContent:'center',alignItems:'center',marginTop:50}} >
              <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={'#FFF'}
              />
              </View>
              <View style={{margin:20,flexDirection:'row',justifyContent:'space-between'}} >
                  <View style={{flexDirection:'row'}} >
                    <View style={{backgroundColor:'#FF9800',height:20,width:20,borderRadius:30}} />
                    <Text style={{marginLeft:10,fontWeight:'500',color:'gray',fontSize:17}} >Male</Text>
                    <Text style={{marginLeft:10,fontWeight:'500',fontSize:17}} >65%</Text>
                  </View>
                  <View style={{flexDirection:'row',marginRight:10}} >
                    <View style={{backgroundColor:'#37A1F6',height:20,width:20,borderRadius:30}} />
                    <Text style={{marginLeft:10,fontWeight:'500',color:'gray',fontSize:17}} >Female</Text>
                    <Text style={{marginLeft:10,fontWeight:'500',fontSize:17}} >35%</Text>
                  </View>
              </View>
          </View>
        </Content>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
    margin:20
  }
});
