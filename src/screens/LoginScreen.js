import React,{Component} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity, Image, StatusBar, AsyncStorage, BackHandler, ToastAndroid} from 'react-native'
import NaverLoginComponent from '../components/NaverLoginComponent'
import KakaoLoginComponent from '../components/KakaoLoginComponent'
import GoogleLoginComponent from '../components/GoogleLoginComponent'
import BlueButton from '../components/BlueButton'

console.disableYellowBox = true;


export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            isReady: false,
        }
    }

    componentDidMount() {
        AsyncStorage.getItem("id").then(asyncStorageRes => {
            if(asyncStorageRes != null) {
                this.props.navigation.navigate('Home')
            }
        })

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }
    // 이벤트 해제
    componentWillUnmount() {
        this.exitApp = false;
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    // 이벤트 동작
    handleBackButton = () => {
        // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
        if (this.exitApp == undefined || !this.exitApp) {
            ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
            this.exitApp = true;

            this.timeout = setTimeout(
                () => {
                    this.exitApp = false;
                },
                2000    // 2초
            );
        } else {
            clearTimeout(this.timeout);

            BackHandler.exitApp();  // 앱 종료
        }
        return true;
    }
    render() {

        return(
            
            <View style={styles.container}>
                <View style={{height: '30%', width: '100%',  marginTop:60}}>
                    <Image resizeMode="contain" source={require('../image/LOGO.png')}
                            style={{width: '100%', height: '100%'}}/>
                </View>
                   
                <Image resizeMode="contain" source={require('../../assets/Subway.png')}
                    style={{width: '90%', height: '90%', right:0, position: 'absolute', bottom: 0, marginRight: '-20%'}}/>

                <View style={{width: '100%', alignItems: 'center', marginTop: '40%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <NaverLoginComponent navigation={this.props.navigation}/>
                        <View style={{marginHorizontal:20}}>
                            <KakaoLoginComponent navigation={this.props.navigation} />
                        </View>
                        <GoogleLoginComponent navigation={this.props.navigation}/>
                    </View>

                    <TouchableOpacity style={styles.email_btn} onPress={()=>this.props.navigation.navigate('emailLogin')}>
                        <Text style={styles.email_text}>이메일로 로그인</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:15, color:'#fff', width:'50%'}}>회원이 아니신가요?   </Text>
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
        backgroundColor:'#3d47ff',
        paddingTop: StatusBar.currentHeight
    },
    email_btn: {
        width: '90%',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    email_container: {
        marginTop: 24,
        width:'100%'
    },
    email_text:{
        color: '#384ec9',
        fontWeight: 'bold',

        width: '100%',
        height:0,
        alignSelf: 'flex-start',
        marginBottom: 5,

        borderBottomColor: '#fff',
        borderBottomWidth:50,
        
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
        alignSelf:'flex-end',
        right: 0,

        textAlign: 'center',
        textAlignVertical: 'center',

    },
    join: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    join_text: {
        color: '#fff'
    },
})