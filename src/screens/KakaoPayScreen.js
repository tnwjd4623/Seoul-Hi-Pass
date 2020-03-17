import React, {Component} from 'react'
import {WebView} from 'react-native-webview'
import {StyleSheet, View, StatusBar, ScrollView, Alert, Linking, Platform} from 'react-native'
var SendIntentAndroid = require('react-native-send-intent');
import Toast from 'react-native-simple-toast'


export default class KakaoPayScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uri: '',
            orderCode: '',
        }
    }
    componentDidMount () {
        const uri = this.props.navigation.getParam('uri');
        const orderCode = this.props.navigation.getParam('orderCode');
    //    console.log(uri, orderCode)
    
        this.setState({uri: uri, orderCode:orderCode}, function() {
          
        })
    }
    callback(response) {
        console.log(response);
    }
    _KakaoPayRequest(url) {
       // Toast.show(url)
    if(url.startsWith('http://beacon.smst.kr/adminnew/kakaoPay/success.php')) {
        this._success(url);
        return true;
    }
    if(url.startsWith('http://') || url.startsWith('https://') || url.startsWith('about:blank')) {
        return true;
    }
    if(Platform.OS === 'android') {   
      SendIntentAndroid.openAppWithUri(url).then(isOpened=> {
          if(!isOpened) {
              console.log("fail to open kakao app")
          }
      }).catch(err=> {
          console.log(err)
      });
    }

      return false;
    }

    _success(url) {
        const success_url = url+"&ordercode="+this.state.orderCode;
        this.setState({uri: success_url});
       // Toast.show(success_url)
        return ;
    }
    _messageResponse(event) {
        console.log(event)
    }
    render() {
        return(
            <>
            <ScrollView contentContainerStyle={{width: '100%', height: '100%'}}>
            <WebView source={{uri: this.state.uri}} style={{width: '100%', height: '100%'}}
                onMessage={(event) =>this._messageResponse(event)}  onShouldStartLoadWithRequest={(event) => {
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
                
                >

            </WebView>
            </ScrollView>
            </>
        )
    }
}

