import React, { Component } from 'react'
import {Text, StyleSheet, TouchableOpacity, View, TextInput, Image, AsyncStorage} from 'react-native'
import axios from 'axios'

import BlueButton from '../components/BlueButton'
import {DefaultInput} from '../components/InputBoxes'


const key = 'beacon091211fX2TAJS0VbillUWp1aVx002VggT'
export default class EmailLoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password:'',
        }
    }
    login = () => {
        axios.get('https://beacon.smst.kr/appAPI/v1/loginPhone.php?apiKey='
            +key+'&modeType=loginPhone&email='+this.state.email+'&passwd='+this.state.password)
        .then(response => {
            if(response.data.rescode == "0000") {
                console.log(response.data.muid)
                AsyncStorage.setItem("email", this.state.email);
                AsyncStorage.setItem("id", response.data.muid);

                this.props.navigation.navigate('Home');
            }
            else {
                console.log(response)
            }
            
        })
        
    }
    _inputEmail = text => {
        this.setState({email: text})
    }
    _inputPW = text => {
        this.setState({password: text})
    }
    findPW = () => {
        this.props.navigation.navigate('findPW');
    }
    render() {
        return(
            <View style={{backgroundColor: '#4666e5', width: '100%', height: '100%', alignItems: 'center'}}>

                <View style={{height: '40%', width: '80%', marginTop:80}}>
                    <Image resizeMode="contain" source={require('../../assets/LOGO_main.png')} 
                            style={{width: '100%', height: '90%',marginLeft: '-20%'}}/>
                </View>

                <View style={{width: '100%', 
                alignItems: 'center', justifyContent: 'center', justifyContent: 'flex-end'}}>
                    <View style={styles.login_form}>
                        {/*<View>
                            <Text style={{marginLeft: 15,paddingLeft: 10, color:'#fff'}}>이메일</Text>
                            <TextInput style={styles.input} onChangeText={this._inputEmail} 
                            placeholder={"이메일 입력"} placeholderTextColor={'#fff'} onSubmitEditing ={()=>this.secondTextInput.focus()}
                            blurOnSubmit={false} />
                        </View>
                        
                        <View>
                            <Text style={{marginLeft: 15,paddingLeft: 10, color: '#fff'}}>비밀번호</Text>
                            <TextInput style={styles.input} onChangeText={this._inputPW} ref={(input)=>{this.secondTextInput = input}}
                            placeholder={"8자리 이상"} placeholderTextColor={'#fff'} 
                            secureTextEntry={true}/>
                        </View>
                        
                        */}

                        <DefaultInput text='이메일' placeholder="이메일 입력" white={true} onChangeText={this._inputEmail}
                        onSubmitEditing ={()=>this.secondTextInput.focus()} blurOnSubmit={false} marginBottom={33}/>

                        <DefaultInput text='비밀번호' placeholder="8자리 이상" white={true} onChangeText={this._inputPW}
                        ref={(input)=>{this.secondTextInput = input}} secureTextEntry={true}/>

                    </View>
                    <View style={styles.login_btn_container}>
                        <BlueButton text="로그인" white={true} onPress={this.login}/>
                    </View>

                    <View style={styles.find_pw_container}>
                        <Text style={{color: '#ffffff99'}}>비밀번호를 잊어버리셨나요 ? </Text>
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
        marginHorizontal:40
    },
    input : {
        marginLeft: 15,
        marginBottom:20,
        borderColor : '#ffffffdd',
        borderBottomWidth: 0.5,
        paddingLeft: 10,
        marginTop: 10,
        color: '#fff'
    },
    login_btn_container: {
        width: '100%',
        
    },
    find_pw_container: {
        flexDirection:'row',
        marginTop:17,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 80,
        fontSize:14

    },
    find_pw: {
        borderBottomWidth: 1,
        color: '#ffffff99',
        borderColor: '#ffffff99'
    },
    /*
    login_text:{
        color: '#384ec9',
        fontWeight: 'bold',

        width: '100%',
        height:0,
        alignSelf: 'flex-start',
        marginBottom: 5,

        borderTopWidth: 45,
        borderTopColor: '#fff',
        borderRightWidth: 10,
        borderRightColor: 'transparent',

        shadowColor: '#cccccc',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        textAlignVertical: 'center',
        textAlign: 'center'
    },
    */
})