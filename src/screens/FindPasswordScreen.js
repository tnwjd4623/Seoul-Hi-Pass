import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import axios from 'axios'
import Toast from 'react-native-simple-toast'

const apiKey = "beacon091211fX2TAJS0VbillUWp1aVx002VggT"
const modeType = "findPasswd"
export default class FindPasswordScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }
    _findPW = () => {
        const email = this.state.email;
        if(email == "") {
            Toast.show("이메일을 입력해주세요");
            return ;
        }
        axios.get("http://beacon.smst.kr/appAPI/v1/email_send_passwd.php?apiKey="
        +apiKey+"&modeType="+modeType+"&email="+email).then(response => {
            console.log(response);
            if(response.data.resmsg == "처리성공") {
                Toast.show("입력하신 이메일로 비밀번호가 전송되었습니다.");
            }
            else {
                Toast.show("이메일이 존재하지 않습니다.");
                return ;
            }

            this.props.navigation.pop();
        })
        
    }
    _inputEmail = text => {
        this.setState({email: text})
    }
    render() {
        return(
            <KeyboardAvoidingView behavior="padding">
                <ScrollView contentContainerStyle={{width: '100%', height: '100%'}}>
                <View style={{height: '100%', backgroundColor: '#fff', alignItems:'center', width: '100%',
                 justifyContent: 'center'}}>
                    <Text style={{width:'70%'}}>이메일</Text>
                    <TextInput placeholder="이메일 입력" style={{borderBottomColor: "#828282", borderBottomWidth:1, width:'70%'}}
                    onChangeText={this._inputEmail} keyboardType={'email-address'}/>
                    <TouchableOpacity style={styles.btn} onPress={this._findPW}>
                        <Text style={styles.text}>확인 메일 보내기</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'flex-start'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',

        width: '100%',
        height:0,
        alignSelf: 'flex-start',
        marginBottom: 5,

        borderTopColor: '#3d47ff',
        borderTopWidth:45,
        
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        alignSelf:'flex-end',
        right: 0,

        textAlign: 'center',
        textAlignVertical: 'center',
    }
})