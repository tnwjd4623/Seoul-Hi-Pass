import React, {Component} from 'react'
import {WebView} from 'react-native-webview'
import {StyleSheet, View, StatusBar, ScrollView, Alert, Linking} from 'react-native'

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
           // Linking.openURL(uri)
        })
    }
    callback(response) {
        console.log(response);
    }
    _KakaoPayRequest(url) {

      
      return false;
    }
    render() {
        return(
            <>
            <ScrollView contentContainerStyle={{width: '100%', height: '100%'}}>
            <WebView source={{uri: this.state.uri}} style={{width: '100%', height: '100%'}}
                onMessage={(event) =>console.log(event)}  onShouldStartLoadWithRequest={(event) => {
                    this._KakaoPayRequest(event.url)
                }}
                allowFileAccess={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
                geolocationEnabled={true}
                saveFormDataDisabled={true}
                allowFileAccessFromFileURLS={true}
                allowUniversalAccessFromFileURLs={true}
                bounces={false}
                originWhitelist={["https://*", "http://*", "file://*", "sms://*", "intent://*"]}
                >

            </WebView>
            </ScrollView>
            </>
        )
    }
}

