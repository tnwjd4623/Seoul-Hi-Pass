import {Text, TouchableOpacity, StyleSheet, Image, TouchableHighlight, AsyncStorage} from 'react-native'
import React, {Component} from 'react'
import KakaoLogins from '@react-native-seoul/kakao-login';
import axios from 'axios'
const key = "beacon091211fX2TAJS0VbillUWp1aVx002VggT"

export default class KakaoLoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            userInfo: {email:'', name:'', type:''}
        
        }
    }

    kakaoLogin = () => {
        KakaoLogins.login().then(result => {
            this.setState({loggedIn:true})
            this.getProfile()
        }).catch(err => {
            if(err.code === 'E_CANCELLED_OPERATION') {
                
            }
            else {
                
            }
        })
    }

    kakaoLogout = () => {
        KakaoLogins.logout().then(result => {
            this.setState({loggedIn:false})
        }).catch(err => {
            
        })
    }

    getProfile = () => {
        KakaoLogins.getProfile().then(result => {
            axios.get("https://beacon.smst.kr/appAPI/v1/loginSns.php?apiKey="
            +key+"&modeType=loginSns&email="+result.email+"&snsSite=kakao&mname="+result.nickname).then(response => {

                if(response.data.rescode == "0000") {
                    AsyncStorage.setItem("id", response.data.muid);
                    this.props.navigation.navigate('Home');
                }
               
                else {
                    console.log("Login Fail");
                }

            })
            
        }).catch(err => {
        
        })
        
    }
    render() {
        const loggedIn = this.state.loggedIn;
        return (
            <>
            <TouchableHighlight style={styles.kakao_btn} onPress={this.kakaoLogin}>
                <Image style={{height: 50, width: 50}} 
                    source={require('../../assets/kakao.png')}/>
            </TouchableHighlight>

            </>
        )
    }
    
}
const styles = StyleSheet.create({
    kakao_btn: {
        width: 50,
        height: 50,
        marginBottom: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    kakao_text: {
        color: '#4a3628',
        fontWeight: 'bold'
    },
})
