import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox, Alert} from 'react-native'
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

const key = "beacon091211fX2TAJS0VbillUWp1aVx002VggT"
export default class JoinScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            CheckBox: {},
            email: '',
            pw: '',
            pw2:'',
            name: '',
            phone: '',
            addr: '',
            addr2: '',
        }
    }
    check = (id) => {
        const check = this.state.CheckBox
        if(id == 'all') {
            if(check[id]) {
                check[id] = false;
                check['first'] = false;
                check['second'] = false;
            }

            else {
                check[id] = true;
                check['first'] = true;
                check['second'] = true;
            }
            
        }

        else {
            if(check[id]) check[id] = false;
            else check[id] = true;
        }
        

        this.setState({CheckBox: check}, function() {
            if(check['first'] == true && check['second'] == true)
                check['all'] = true;
                this.setState({CheckBox: check})
        });
        
    }

    _inputEmail = text => {
        this.setState({email: text})
    }
    _inputPW = text => {
        this.setState({pw: text})
    }
    _inputPW2 = text => {
        this.setState({pw2: text})
    }
    _inputName = text => {
        this.setState({name: text})
    }
    _inputPhone = text => {
        this.setState({phone: text})
    }
    _inputAddr = text => {
       this.setState({addr: text}) 
    }
    _inputAddr2 = text => {
        this.setState({addr2: text})
    }
    _join = () => {
        const check = this.state.CheckBox;

        const email = this.state.email;
        const pw = this.state.pw;
        const name = this.state.name;
        const phone = this.state.phone;
        const addr = this.state.addr;
        const addr2 = this.state.addr2;


        if(check['all'] ) {
            if(check['all'] == true) {
                console.log("Start Join")
                axios.get("https://beacon.smst.kr/appAPI/v1/memberRegisterPhone.php?apiKey="
                +key+"&modeType=join&name="+name+"&email="+email+"&pw="+pw+"&addr="+addr+"&addr2="+addr2+"&phone="+phone).then(response => 
                    {
                        if(response.data.rescode == "0000") {
                            this.success();
                        }
                        else {
                            console.log(response, name);
                        }
                    } 
                )}      
        }
        
        else {
            console.log("Join Fail")
        }
    }
    success = () => {
        Alert.alert(
            "회원가입 성공",
            "",
            [
                {text: '확인', onPress:()=>this.props.navigation.pop()}
            ],
            { cancelable: false }
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.login_form}>
                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>이메일</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} onChangeText={this._inputEmail}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>비밀번호 (8자리 이상)</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}
                        onChangeText={this._inputPW}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>비밀번호 확인</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}
                        onChangeText={this._inputPW2}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>이름</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'}
                        onChangeText={this._inputName}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>전화번호</Text>
                        <View style={{flexDirection: 'row'}}>
                          <TextInput style={styles.phone_input} placeholderTextColor={'#999999'} onChangeText={this._inputPhone}/>
                          <TouchableOpacity style={styles.phone_btn}>
                              <Text style={{color: '#000', fontWeight: 'bold'}}>인증번호 전송</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>주소지입력</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} placeholder="주소 입력" 
                        onChangeText={this._inputAddr}/>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} placeholder="상세주소 입력"
                        onChangeText={this._inputAddr2}/>
                    </View>
                </View>

                <View style={styles.agree_container}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                        <CheckBox value={this.state.CheckBox['all']} onValueChange={()=>this.check('all')} />
                        <Text>약관 전체동의(필수)</Text>
                    </View> 

                    <View style={styles.agree_list}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox  value={this.state.CheckBox['first']} onValueChange={()=>this.check('first')} />
                            <TouchableOpacity style={{width: '90%'}} onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={{color: '#404040'}}>서울하이패스 이용약관 동의(필수)</Text>
                            </TouchableOpacity>
        
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox  value={this.state.CheckBox['second']} onValueChange={()=>this.check('second')} />
                            <TouchableOpacity style={{width: '90%'}} onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={{width: '90%', color: '#404040'}}>개인정보 수집이용 동의(필수)</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>

                <TouchableOpacity style={styles.join_btn} onPress={this._join}>
                    <Text style={styles.joinText}>회원가입</Text>
                </TouchableOpacity>
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
        backgroundColor: '#fff'
    },
    login_form:{
        width: '70%',
        marginLeft: 20
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
        paddingLeft: 20,

        marginHorizontal: 20
    },
    join_btn: {
        alignItems: 'center',
        width: '90%',
        marginTop: 20,
        alignSelf: 'flex-start',
        
    },
    joinText: {
        color: '#fff',
        fontWeight: 'bold',

        width: '100%',
        height:0,
        alignSelf: 'flex-start',
        marginBottom: 5,

        borderTopWidth: 45,
        borderTopColor: '#384ec9',
        borderRightWidth: 10,
        borderRightColor: 'transparent',

        

        textAlignVertical: 'center',
        textAlign: 'center'
    }
})