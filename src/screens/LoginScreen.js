import React,{Component} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialIcons'
import NaverLoginComponent from '../components/NaverLoginComponent'
import KakaoLoginComponent from '../components/KakaoLoginComponent'
import GoogleLoginComponent from '../components/GoogleLoginComponent'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <NaverLoginComponent/>
                    <View style={{marginHorizontal:20}}><KakaoLoginComponent/></View>
                    <GoogleLoginComponent/>
                </View>

                <TouchableOpacity style={styles.email_btn} onPress={()=>this.props.navigation.navigate('emailLogin')}>
                    <Text style={styles.email_text}>이메일로 로그인</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:15, color:'#828282'}}>회원이 아니신가요?   </Text>
                    <TouchableOpacity style={styles.join} onPress={()=>this.props.navigation.navigate('join')}>
                        <Text style={styles.join_text}>회원가입 하기</Text>
                    </TouchableOpacity>
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
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    email_btn: {
        width: 260,
        height: 40,
        backgroundColor: '#465cdb',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 20
    },
    email_text:{
        color: '#fff',
        fontWeight: 'bold'
    },
    join: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    join_text: {
        color: '#595959'
    },
})