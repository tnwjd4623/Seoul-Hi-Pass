import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, NativeModules } from 'react-native';
import AppContainer from './src/AppContainer';



export default class App extends Component{
  render() {
    return ( 
        <AppContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
