import React, { Component } from 'react'
import {Text, StyleSheet, TouchableOpacity, View, StatusBar, TextInput} from 'react-native'


export default class EmailLoginScreen extends Component {
    constructor(props) {
        super(props)
    }
    login = () => {
        this.props.navigation.navigate('Home');
    }
    findPW = () => {
        this.props.navigation.navigate('findPW');
    }
    render() {
        return(
            <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
                <View style={{width: '100%', height: '70%', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.login_form}>
                        <View>
                            <Text style={{marginLeft: 15,paddingLeft: 10}}>이메일</Text>
                            <TextInput style={styles.input} placeholder={"이메일 입력"} placeholderTextColor={'#999999'}/>
                        </View>

                        <View>
                            <Text style={{marginLeft: 15,paddingLeft: 10}}>비밀번호</Text>
                            <TextInput style={styles.input} placeholder={"비밀번호"} placeholderTextColor={'#999999'} secureTextEntry={true}/>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.login_btn} onPress={this.login}>
                        <Text style={styles.email_text}>로그인</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginTop:10, marginRight: 10}}>비밀번호를 잊어버리셨나요 ? </Text>
                        <TouchableOpacity onPress={this.findPW}>
                            <Text style={styles.find_pw}>비밀번호찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login_form:{
        width: '85%'
    },
    input : {
        marginLeft: 15,
        marginBottom:20,
        borderColor : '#828282',
        borderBottomWidth: 1,
        paddingLeft: 10,
        
    },
    login_btn: {
        width: '70%',
        height: 40,
        backgroundColor: '#465cdb',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        shadowColor: '#cccccc',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    find_pw: {
        borderBottomWidth: 1,
        marginTop: 10,
        color: '#828282',
        borderColor: '#818181'
    },
    email_text:{
        color: '#fff',
        fontWeight: 'bold'
    },
})