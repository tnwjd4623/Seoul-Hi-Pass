import React,{Component} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity, Image, StatusBar, AsyncStorage} from 'react-native'
import NaverLoginComponent from '../components/NaverLoginComponent'
import KakaoLoginComponent from '../components/KakaoLoginComponent'
import GoogleLoginComponent from '../components/GoogleLoginComponent'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    componentDidMount() {
        AsyncStorage.getItem("id").then(asyncStorageRes => {
            if(asyncStorageRes != null) {
                this.props.navigation.navigate('Home')
            }
        })
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={{height: '30%', width: '80%',  marginTop:60}}>
                    <Image resizeMode="contain" source={require('../../assets/LOGO_main.png')} 
                            style={{width: '100%', height: '100%' ,marginLeft: '-20%',}}/>
                </View>
                   
                <Image resizeMode="contain" source={require('../../assets/Subway.png')}
                    style={{width: '90%', height: '90%', right:0, position: 'absolute', bottom: 0, marginRight: '-20%'}}/>

                <View style={{width: '100%', alignItems: 'center', marginTop: '40%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <NaverLoginComponent/>
                        <View style={{marginHorizontal:20}}><KakaoLoginComponent/></View>
                        <GoogleLoginComponent/>
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
        backgroundColor:'#384ec9',
        paddingTop: StatusBar.currentHeight
    },
    email_btn: {
        width: '90%',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    email_text:{
        color: '#384ec9',
        fontWeight: 'bold',

        width: '100%',
        height:0,
        alignSelf: 'flex-start',
        marginBottom: 5,

        borderBottomColor: '#fff',
        borderBottomWidth:45,
        
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