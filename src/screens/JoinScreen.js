import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox, Alert, 
    ScrollView, Modal, TouchableHighlight, KeyboardAvoidingView, Image} from 'react-native'
import axios from 'axios'
import {WebView} from 'react-native-webview'
import {AntDesign} from '@expo/vector-icons'
import Postcode from 'react-native-daum-postcode';
import Toast from 'react-native-simple-toast'


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
            modal: false,
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
            else
                check['all'] = false;
            
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
        const pw_check = this.state.pw2;

        const name = this.state.name;
        const phone = this.state.phone;
        const addr = this.state.addr;
        const addr2 = this.state.addr2;

        if(email == "") {
            Toast.show("이메일은 필수입력사항 입니다.");
            return;
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(email) === false) {
            Toast.show("이메일 형식이 바르지 않습니다.");
            return ;
        }


        if(pw.length < 8) {
            Toast.show("비밀번호는 8자 이상 입니다.");
            return;
        }
        if(pw != pw_check) {
            Toast.show("비밀번호를 확인해주세요.");
            return;
        }
        if(name == "") {
            Toast.show("이름은 필수입력사항 입니다.");
            return;
        }
        if(phone == "") {
            Toast.show("휴대폰은 필수입력사항 입니다.");
            return;
        }
        if(addr == "") {
            Toast.show("주소는 필수입력사항 입니다.");
            return;
        }
        

        

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
                            Toast.show("이미 존재하는 이메일입니다.");
                        }
                    } 
                )}      
        }
        
        else {
            Toast.show("약관 동의가 필요합니다.");
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

    setAddress(data) {
       // console.log(data.address);
        this.setState({addr: data.address})
        this.closeModal();
    }
    closeModal = () => {
        this.setState({modal: false})
    }
    openModal = () => {
        this.setState({modal: true})
    }
    _agree = (data) => {
        if(data['first'] == true && data['second'] == true)
            this.check('all');
        else if(data['first'] == true && data['second'] == false)
            this.check('first');
        else if(data['second'] == true && data['first'] == false)
            this.check('second');
        else
            return;
    }
    render() {
        return(
            <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.login_form}>
                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>이메일</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} onChangeText={this._inputEmail}
                        onSubmitEditing ={()=>this.secondTextInput.focus()} keyboardType={'email-address'} />
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>비밀번호 (8자리 이상)</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}
                        onChangeText={this._inputPW}
                        onSubmitEditing ={()=>this.ThirdTextInput.focus()}
                        ref={(input)=>{this.secondTextInput = input}}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>비밀번호 확인</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}
                        onChangeText={this._inputPW2}
                        ref={(input)=>{this.ThirdTextInput = input}}
                        onSubmitEditing ={()=>this.ForthTextInput.focus()}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>이름</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'}
                        onChangeText={this._inputName}
                        onSubmitEditing ={()=>this.FifthTextInput.focus()}
                        ref={(input)=>{this.ForthTextInput = input}}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>전화번호</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} onChangeText={this._inputPhone}
                        ref={(input)=>{this.FifthTextInput = input}} maxLength={11} keyboardType={'number-pad'}
                        />
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>주소지입력</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.phone_input}>{this.state.addr}</Text>
                            <TouchableOpacity style={styles.phone_btn} onPress={this.openModal}>
                                <Text style={{color: '#000', fontWeight: 'bold'}}>주소 검색</Text>
                            </TouchableOpacity>
                        </View>
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
                        <View style={{width: '80%'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <CheckBox  value={this.state.CheckBox['first']} onValueChange={()=>this.check('first')} />
                                
                                    <Text style={{color: '#404040'}}>서울하이패스 이용약관 동의(필수)</Text>
                               
            
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <CheckBox  value={this.state.CheckBox['second']} onValueChange={()=>this.check('second')} />
                                
                                    <Text style={{width: '90%', color: '#404040'}}>개인정보 수집이용 동의(필수)</Text>
                               
                            </View>
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight onPress={()=>this.props.navigation.navigate('agree', 
                                { goBackData: this._agree, checkbox: this.state.CheckBox}) }>
                            <Image source={require('../../assets/Right.png')} resizeMode="contain" style={{height:30, justifyContent: 'center'
                            , marginRight: 5}}/>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>

                <TouchableOpacity style={styles.join_btn} onPress={this._join}>
                    <Text style={styles.joinText}>회원가입</Text>
                </TouchableOpacity>
                </ScrollView>

                <Modal visible={this.state.modal}> 
                    
                        <TouchableHighlight onPress={this.closeModal} style={{alignSelf: 'flex-end'}}>
                            <AntDesign name="close" size={25} color={"#465cdb"} />
                        </TouchableHighlight>
                        <View style={{width: '100%', height: '90%'}}>
                           <Postcode style={{width: '100%', height: '100%'}} jsOptions={{animated: true}} 
                           onSelected={(data) => this.setAddress(data)}/>
                        </View>
                    
                </Modal>
            </View>
            </KeyboardAvoidingView>
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
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        paddingLeft: 20,
        height: 80,
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
        borderTopColor: '#3d47ff',
        borderRightWidth: 10,
        borderRightColor: 'transparent',

        

        textAlignVertical: 'center',
        textAlign: 'center'
    }
})