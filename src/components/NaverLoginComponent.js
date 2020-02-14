import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login'


const androidKeys = {
    kConsumerKey:'J54f6Ml6Fa4o3mBwRbo0',
    kConsumerSecret:'bH5RX3wwKl',
    kServiceAppName: "비콘결제앱"
}

const initials = androidKeys;

const NaverLoginComponent = () =>{
    const [naverToken, setNaverToken] = React.useState(null);

    const naverLogin = props => {
        return new Promise((resolve, reject) => {
            NaverLogin.login(props, (err, token) => {
                console.log(`\n\n Token is fetched :: ${token} \n\n`);
                setNaverToken(token);
                if(err) {
                    reject(err);
                    return;
                }
                resolve(token);
            })
        })
    }

    const naverLogout = () => {
        NaverLogin.logout();
        setNaverToken("");
    }

    const getUserProfile = async () => {
        const profileResult = await getProfile(naverToken.accessToken);
        if(profileResult.resultcode == "024") {
            Alert.alert("로그인 실패", profileResult.message);
            return;
        }
        console.log("profileResult", profileResult);
    }
  
    return(
        <>
        {!naverToken && <TouchableOpacity style={styles.naver_btn} onPress={()=>naverLogin(initials)}>
                                <Text style={styles.naver_text}>네이버 로그인</Text>
                        </TouchableOpacity>}

        {!!naverToken && <TouchableOpacity style={styles.naver_btn} onPress={naverLogout}>
                            <Text style={styles.naver_text}>네이버 로그아웃</Text>
                        </TouchableOpacity>}

        {!!naverToken && <TouchableOpacity style={styles.naver_btn} onPress={getUserProfile}>
                            <Text style={styles.naver_text}>회원정보 가져오기</Text>
                        </TouchableOpacity>}
        </>
    )
}

const styles = StyleSheet.create({
    naver_btn: {
        width: 220,
        height: 40,
        backgroundColor: '#3cb538',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    naver_text: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
})

export default NaverLoginComponent