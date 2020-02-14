import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import KakaoLogins from '@react-native-seoul/kakao-login';

const PROFILE_EMPTY = {
    id: 'profile has not fetched',
    email: 'profile has not fetched',
    profile_image_url: '',
};
const logCallback = (log, callback) => {
    console.log(log);
    callback;
};

export default function KakaoLoginComponent() {
    const [loginLoading, setLoginLoading] = useState(false);
    const [lotoutLoading, setLogoutLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(false);

    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState(PROFILE_EMPTY);

    const kakaoLogin = () => {
        logCallback('Login Start', setLoginLoading(true));

        KakaoLogins.login().then(result => {
            setToken(result.accessToken);
            logCallback(
                `Login Finished:${JSON.stringify(result)}`,
                setLoginLoading(false),
            );
        }).catch(err => {
            if(err.code === 'E_CANCELLED_OPERATION') {
                logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
            }
            else {
                logCallback(`Login Failed:${err.code} ${err.message}`, setLoginLoading(false),)
            }
        })
    }

    const kakaoLogout = () => {
        logCallback('Logout Start', setLogoutLoading(true));

        KakaoLogins.logout().then(result => {
            setToken("");
            setProfile(PROFILE_EMPTY);
            logCallback(`Logout Finished:${result}`, setLogoutLoading(false));
        }).catch(err => {
            logCallback(`Logout Failed:${err.code} ${err.message}`, setLogoutLoading(false),)
        })
    }

    const getProfile = () => {
        logCallback('Get Profile Start', setProfileLoading(true));
        
        KakaoLogins.getProfile().then(result => {
            setProfile(result);
            logCallback(`Get Profile Finished:${JSON.stringify(result)}`, setProfileLoading(false),)
        }).catch(err => {
            logCallback(`Get Profile Failed:${err.code} ${err.message}`, setProfileLoading(false),)
        })
        
    }
    
    const {id, email, profile_image_url:photo} = profile;
    return (
        <>
        {!token && <TouchableOpacity style={styles.kakao_btn} onPress={kakaoLogin}>
                        <Text style={styles.kakao_text}>카카오 로그인</Text>
                    </TouchableOpacity>}

        {!!token && <TouchableOpacity style={styles.kakao_btn} onPress={kakaoLogout}>
                        <Text style={styles.kakao_text}>카카오 로그아웃</Text>
                    </TouchableOpacity>}
        {!!token && <TouchableOpacity style={styles.kakao_btn} onPress={getProfile}>
                        <Text style={styles.kakao_text}>프로필 가져오기</Text>
                    </TouchableOpacity>}
        </>
    )
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
