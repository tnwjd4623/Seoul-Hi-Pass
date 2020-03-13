import React,{Component} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity, Image, StatusBar, AsyncStorage} from 'react-native'
import NaverLoginComponent from '../components/NaverLoginComponent'
import KakaoLoginComponent from '../components/KakaoLoginComponent'
import GoogleLoginComponent from '../components/GoogleLoginComponent'

import BlueButton from '../components/BlueButton'

import SvgUri from 'react-native-svg-uri'

//import {SvgCssUri} from 'react-native-svg'

import LOGO from '../../assets/0312_svg/0312_Search.svg'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    UNSAFE_componentDidMount() {
        AsyncStorage.getItem("id").then(asyncStorageRes => {
            if(asyncStorageRes != null) {
                this.props.navigation.navigate('Home')
            }
        })
    }
    
    render() {

        return(
            <View style={styles.container}>
                <View style={{height: '40%', width: '100%', marginTop:'15%'}}>
                    <SvgUri  source={require('../../assets/logo/LOGO_main.svg')} 
                             width="75%" height="100%" style={{marginLeft:'-5%', top:0}}/>
                </View>

                <Image resizeMode="contain" uri={require('../../assets/Subway.png')}
                    style={{width: '90%', height: '90%', right:0, position: 'absolute', bottom: 0, marginRight: '-25%'}}/>

                <View style={{width: '100%', alignItems: 'center', marginBottom: '17%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <NaverLoginComponent navigation={this.props.navigation}/>
                        <View style={{marginHorizontal:20}}><KakaoLoginComponent navigation={this.props.navigation} /></View>
                        <GoogleLoginComponent navigation={this.props.navigation}/>
                    </View>
                    <View style={styles.email_container}>
                        <BlueButton text="이메일로 로그인" white={true} right={true} onPress={()=>this.props.navigation.navigate('emailLogin')}/>
                    </View>

                    <View style={styles.join_container}>
                        <Text style={{color:'#ffffffdd'}}>회원이 아니신가요?   </Text>
                        <TouchableOpacity style={styles.join} onPress={()=>this.props.navigation.navigate('join')}>
                            <Text style={styles.join_text}>회원가입 하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor:'#4666e5',
        paddingTop: StatusBar.currentHeight,

        flexDirection:'column',
        justifyContent:'space-between'
    },
    email_container: {
        marginTop: 24,
        width:'100%'
    },
    join_container: {
        flexDirection:'row',
        marginTop:17,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 80

    },
    join: {
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    join_text: {
        color: '#ffffffdd'
    },
})