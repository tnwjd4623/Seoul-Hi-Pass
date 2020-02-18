import {Text, TouchableOpacity, StyleSheet} from 'react-native'
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
            {!loggedIn && <TouchableOpacity style={styles.kakao_btn} onPress={this.kakaoLogin}>
                            <Text style={styles.kakao_text}>카카오 로그인</Text>
                        </TouchableOpacity>}
    
            {!!loggedIn && <TouchableOpacity style={styles.kakao_btn} onPress={this.kakaoLogout}>
                            <Text style={styles.kakao_text}>카카오 로그아웃</Text>
                        </TouchableOpacity>}
            </>
        )
    }
    
}
const styles = StyleSheet.create({
    kakao_btn: {
        width: 220,
        height: 40,
        backgroundColor: '#fff708',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    kakao_text: {
        color: '#4a3628',
        fontWeight: 'bold'
    },
})
