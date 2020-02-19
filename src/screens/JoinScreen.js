import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox} from 'react-native'
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler'


export default class JoinScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            CheckBox: false,
        }
    }
    check = () => {
        console.log("hello");
    }
    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
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
                        <Text style={styles.default_Text}>이름</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>전화번호</Text>
                        <View style={{flexDirection: 'row'}}>
                          <TextInput style={styles.phone_input} placeholderTextColor={'#999999'}/>
                          <TouchableOpacity style={styles.phone_btn}>
                              <Text style={{color: '#000', fontWeight: 'bold'}}>인증번호 전송</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>인증번호</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>주소지입력</Text>
                        <View style={{flexDirection: 'row'}}>
                          <TextInput style={styles.phone_input} placeholderTextColor={'#999999'} placeholder="우편번호 검색"/>
                          <TouchableOpacity style={styles.phone_btn}>
                              <Text style={{color: '#000', fontWeight: 'bold'}}>우편번호 검색</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} placeholder="상세주소 입력"/>
                    </View>
                </View>

                <View style={styles.agree_container}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox value={this.state.CheckBox} onValueChange={this.check} />
                        <Text>약관 전체동의(필수)</Text>
                    </View> 

                    <View style={styles.agree_list}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity style={{width: '90%'}} onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={{color: '#404040'}}>이용약관 동의(필수)</Text>
                            </TouchableOpacity>
                            <CheckBox value={this.state.CheckBox} onValueChange={this.check} />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity style={{width: '90%'}} onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={{width: '90%', color: '#404040'}}>개인정보 수집이용 동의(필수)</Text>
                            </TouchableOpacity>
                            <CheckBox value={this.state.CheckBox} onValueChange={this.check} />
                        </View>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity style={{width: '90%'}} onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={{width: '90%', color: '#404040'}}>마케팅 수신 동의(선택)</Text>
                            </TouchableOpacity>
                            <CheckBox value={this.state.CheckBox} onValueChange={this.check} />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.join_btn} onPress={()=>this.props.navigation.pop()}>
                        <Text style={{color:'#fff'}}>회원가입하기</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    default_Text: {
        color: '#000'
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#fff'
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
        backgroundColor: '#f5f5f5',
        borderRadius: 7,
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    agree_container: {
        marginTop: 20
    },
    agree_list: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        paddingLeft: 20
    },
    join_btn: {
        backgroundColor: '#495cdb',
        alignItems: 'center',
        width: '70%',
        height: 40,
        borderRadius: 30,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})