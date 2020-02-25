import {Text, TouchableOpacity, StyleSheet, Image, TouchableHighlight} from 'react-native'
import React, {Component} from 'react'
import KakaoLogins from '@react-native-seoul/kakao-login';


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
            this.setState({userInfo: {email: result.email, name: result.nickname, type:'kakao' }})
        }).catch(err => {
        
        })
        
    }
    render() {
        const loggedIn = this.state.loggedIn;
        return (
            <>
            {!loggedIn && <TouchableHighlight style={styles.kakao_btn} onPress={this.kakaoLogin}>
                                <Image style={{height: 50, width: 50}} 
                                source={require('../../assets/kakao.png')}/>
                        </TouchableHighlight>}
    
            {!!loggedIn && <TouchableOpacity style={styles.kakao_btn} onPress={this.kakaoLogout}>
                            <Text style={styles.kakao_text}>카카오 로그아웃</Text>
                        </TouchableOpacity>}
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
