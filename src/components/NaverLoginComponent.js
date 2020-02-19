import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login'


const androidKeys = {
    kConsumerKey:'J54f6Ml6Fa4o3mBwRbo0',
    kConsumerSecret:'bH5RX3wwKl',
    kServiceAppName: "비콘결제앱"
}

const initials = androidKeys;

class NaverLoginComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            token: null,
            userInfo: {email: '', name: '', type: 'naver'}
        }
    }
    naverLogin = (props )=> {
        return new Promise((resolve, reject) => {
            NaverLogin.login(props, (err, token) => {
                console.log(`\n\n Token is fetched :: ${token} \n\n`);
                this.setState({loggedIn: true, token: token})
                if(err) {
                    reject(err);
                    return;
                }
                resolve(token);
            })
        })
    }

    naverLogout = () => {
        NaverLogin.logout();
        this.setState({loggedIn: false})
    }

    getUserProfile = async () => {
        const profileResult = await getProfile(this.state.token.accessToken);
        if(profileResult.resultcode == "024") {
            Alert.alert("로그인 실패", profileResult.message);
            return;
        }
        this.setState({userInfo: {email: profileResult.response.email, name: profileResult.response.name}})
    }
    render() {
        const loggedIn = this.state.loggedIn;
        return(
            <>
            {!loggedIn && <TouchableOpacity style={styles.naver_btn} onPress={()=>this.naverLogin(initials)}>
                                    
                            </TouchableOpacity>}
    
            {!!loggedIn && <TouchableOpacity style={styles.naver_btn} onPress={this.naverLogout}>
                                <Text style={styles.naver_text}>네이버 로그아웃</Text>
                            </TouchableOpacity>}
    
            {!!loggedIn && <TouchableOpacity style={styles.naver_btn} onPress={this.getUserProfile}>
                                <Text style={styles.naver_text}>회원정보 가져오기</Text>
                            </TouchableOpacity>}
            </>
        )
    }
    
}

const styles = StyleSheet.create({
    naver_btn: {
        width: 50,
        height: 50,
        backgroundColor: '#3cb538',
        borderRadius: 100/2,
        alignItems: 'center',
        justifyContent: 'center',
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
    naver_text: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
})

export default NaverLoginComponent