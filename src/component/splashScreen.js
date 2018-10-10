import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';

var {height, width} = Dimensions.get('window');

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    };
  constructor(props){
    super(props);
    this.state = {
      progress:0.00,
      indeterminate: true
    }
  }
  componentDidMount(){
    this.showLoading()
  }
  showLoading = e => {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
          this.props.navigation.navigate('home')
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
    
  }
  render() {
    let widths = width - 60;
    let progress = parseInt(this.state.progress * 100)
    return (
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:'flex-end'}} >
          <Text style={{color:'white',fontSize:35,justifyContent:'center',alignSelf:'center'}} >ghostlamp</Text>
        </View>
        <View style={{flex:1,justifyContent:'flex-end'}} >
        <Progress.Bar progress={this.state.progress} indeterminate={this.state.indeterminate} width={widths} color={'white'} style={{marginLeft:20,marginBottom:80}} />
          <Text style={{color:'white',alignSelf:'center',paddingBottom:80}} > Loading {progress} % </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D9DF0',
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
