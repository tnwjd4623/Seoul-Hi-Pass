import React, { Component } from 'react'
import {StyleSheet, Text, View, StatusBar, Image, 
    TouchableHighlight, AsyncStorage, ScrollView, TextInput, TouchableOpacity, Alert, Modal, KeyboardAvoidingView} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import axios from 'axios'
import Postcode from 'react-native-daum-postcode';

const key = "beacon091211fX2TAJS0VbillUWp1aVx002VggT"

export default class InfoModifyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            id: '',
            addr: '',
            addr2: '',
            name: '',
            phone: '',
            pw: '',
            pw2: '',

            modal: false,
            sns: '',
        }
    }
    componentDidMount() {
        AsyncStorage.getItem("id").then(asyncStorageRes => {
            this.setState({id: asyncStorageRes}, function() {
                axios.get("https://beacon.smst.kr/appAPI/v1/memberRegisterPhone.php?apiKey="
                +key+"&modeType=userInfo&muid="+this.state.id).then(response => {
                    console.log(response);
                    this.setState({email: response.data.email, name: response.data.mname, addr: response.data.addr,
                    addr2: response.data.addr2, phone: response.data.hphone, sns: response.data.sns })
                })
            })
        })
    }

    _inputPW = text => {
        this.setState({pw:text})
    }
    _inputPW2 = text => {
        this.setState({pw2: text})
    }
    _inputPhone = text => {
        this.setState({phone: text})
    }
    _inputAddr2 = text => {
        this.setState({addr2: text})
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
    _modify = () => {
        if(this.state.sns == "local") {
            if(this.state.pw.length < 8 || this.state.pw2.length < 8 ) {
                Alert.alert(
                    "비밀번호는 8자 이상입니다",
                    "",
                    [
                        {text: '확인'}
                    ],
                    { cancelable: false }
                );
                return ;
            }
            if(this.state.pw != this.state.pw2 ) {
                Alert.alert(
                    "비밀번호를 확인해주세요",
                    "",
                    [
                        {text: '확인'}
                    ],
                    { cancelable: false }
                );
                return ;
            }
        }
        

        const pw = this.state.pw;
        const phone = this.state.phone;
        const addr = this.state.addr;
        const addr2 = this.state.addr2;
        const id = this.state.id;
      

        axios.get("https://beacon.smst.kr/appAPI/v1/memberRegisterPhone.php?apiKey="+key+"&modeType=mody&muid="+
            id+"&pw="+pw+"&addr="+addr+"&addr2="+addr2+"&phone="+phone).then(response => {
                    if(response.data.rescode == "0000"){
                        Alert.alert(
                            "수정되었습니다.",
                            "",
                            [
                                {text: '확인'}
                            ],
                            { cancelable: false }
                        );
                        this.props.navigation.pop();
                    }
                })

    }
    render() {
        return(
            <KeyboardAvoidingView behavior="height">
            <View style={{paddingTop: StatusBar.currentHeight, height:'100%', backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <View style={{width: '90%', height: '100%'}}>
                        <Image resizeMode="contain" source={require('../../assets/Mypage_1.png')} 
                            style={{width: '55%', height:'100%', marginLeft: -10}}/>
                    </View>

                    <TouchableHighlight onPress={()=>this.props.navigation.pop()}>
                        <AntDesign name="close" size={35} color='#5e5e5e'/>
                    </TouchableHighlight>
                </View>

                <View style={styles.container}>
                <ScrollView>
                    <View style={styles.login_form}>
                        <View style={styles.input_container}>
                            <Text style={styles.default_Text}>이메일</Text>
                            <Text style={styles.default_Text}>{this.state.email}</Text>
                        </View>

                     { this.state.sns == "local" &&   <View style={styles.input_container}>
                            <Text style={styles.default_Text}>비밀번호 (8자리 이상)</Text>
                            <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}
                            onChangeText={this._inputPW}/>
                        </View>
                    }

                    {this.state.sns == "local" && <View style={styles.input_container}>
                            <Text style={styles.default_Text}>비밀번호 확인</Text>
                            <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true}
                            onChangeText={this._inputPW2}/>
                        </View>
                    }
                        <View style={styles.input_container}>
                            <Text style={styles.default_Text}>이름</Text>
                            <Text style={styles.input}>{this.state.name}</Text>
                        </View>

                        <View style={styles.input_container}>
                            <Text style={styles.default_Text}>전화번호</Text>
                            <TextInput style={styles.input} placeholderTextColor={'#999999'} placeholder="전화번호 입력"
                            defaultValue={this.state.phone} keyboardType={'numeric'} onChangeText={this._inputPhone} />
                        </View>


                        <View style={styles.input_container}>
                        <Text style={styles.default_Text}>주소지입력</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.phone_input} >{this.state.addr}</Text>
                          <TouchableOpacity style={styles.phone_btn} onPress={this.openModal}>
                              <Text style={{color: '#000', fontWeight: 'bold'}}>주소 검색</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} placeholder="상세주소 입력" 
                        defaultValue={this.state.addr2} onChangeText={this._inputAddr2}/>
                    </View>
                    </View>
                    <TouchableOpacity style={styles.join_btn} onPress={this._modify}>
                        <Text style={styles.joinText}>정보수정</Text>
                    </TouchableOpacity>
                </ScrollView>
                </View>

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
        color: '#000',
        fontSize: 15
    },
    header:{
        width: '100%',
        height: 40,
        flexDirection: 'row'
    },
    title: {
        marginLeft: 20,
        color: '#465cdb',
        fontSize: 15,
        fontWeight: 'bold',
        width: '40%'
    },
    container: {
        width: '100%',
        height: '90%',
        backgroundColor: '#fff',
        marginTop: 20
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