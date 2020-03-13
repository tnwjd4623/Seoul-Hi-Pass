import React, {Component} from 'react'
import {WebView} from 'react-native-webview'
import {StyleSheet, View, StatusBar, ScrollView, Alert, Linking} from 'react-native'
var SendIntentAndroid = require("react-native-send-intent");

export default class KakaoPayScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uri: ''
        }
    }
    componentDidMount () {
        const uri = this.props.navigation.getParam('uri');
        const orderCode = this.props.navigation.getParam('orderCode');
        console.log(uri, orderCode)
    
        this.setState({uri: uri}, function() {
            Linking.openURL(uri)
        })
    }
    callback(response) {
        console.log(response);
    }
    _KakaoPayRequest(intent) {

      SendIntentAndroid.openApp(intent.url)
      return false;
    }
    render() {
        return(
            <>
            <ScrollView contentContainerStyle={{width: '100%', height: '100%'}}>
            <WebView source={{uri: this.state.uri}} style={{width: '100%', height: '100%'}}
                onMessage={(event) =>console.log(event)}  
                >

            </WebView>
            </ScrollView>
            </>
        )
    }
}

