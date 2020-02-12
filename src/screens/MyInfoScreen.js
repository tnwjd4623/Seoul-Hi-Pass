import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class MyInfoScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
            
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.login_form}>
                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>이메일</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>비밀번호 (8자리 이상)</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>비밀번호 확인</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>전화번호</Text>
                        <View style={{flexDirection: 'row'}}>
                          <TextInput style={styles.phone_input} placeholderTextColor={'#999999'}/>
                          <TouchableOpacity style={styles.phone_btn}>
                              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>인증번호 전송</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>주소지 입력</Text>
                        <TextInput style={styles.input} placeholder={"우편번호 검색"} placeholderTextColor={'#999999'}/>
                        <TextInput style={styles.input} placeholder={"나머지 주소 입력"} placeholderTextColor={'#999999'}/>
                    </View>
                </View>

            </View>
            </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    default_Text: {
        color: '#999999'
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    login_form:{
        width: '70%'
    },
    input : {
        borderBottomWidth: 1,
        borderColor : '#828282',
        paddingLeft: 10,
        
    },
    input_container: {
        marginBottom: 20,
    },
    phone_input: {
        borderBottomWidth: 1,
        borderColor : '#828282',
        paddingLeft: 10,
        width: '100%'
    },
    phone_btn: {
        backgroundColor: '#ababab',
        borderRadius: 7,
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
   
})