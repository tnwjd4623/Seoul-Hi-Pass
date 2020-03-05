import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox} from 'react-native'
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler'


export default class JoinScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            //CheckBox: false,
            check_all: false,
            check_1: false,
            check_2: false,
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
    check_1 = () => {
        this.setState((prev)=>({check_1:!prev.check_1}));
        this.setState((prev)=>({check_all:(prev.check_1&&prev.check_2)}));
    }
    check_2 = () => {
        this.setState((prev)=>({check_2:!prev.check_2}));
        this.setState((prev)=>({check_all:(prev.check_1&&prev.check_2)}));
    }
    check_all = () => {
        this.setState((prev)=>({check_all:!prev.check_all}));
        this.setState((prev)=>({check_1:prev.check_all, check_2:prev.check_all}));
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

    join = () => {
        if(this.state.check_all) {
            this.props.navigation.pop();
        }else{
            
        }

                
        const check = this.state.check_all;

        const email = this.state.email;
        const pw = this.state.pw;
        const pw_check = this.state.pw2;

        const name = this.state.name;
        const phone = this.state.phone;
        const addr = this.state.addr;
        const addr2 = this.state.addr2;

        if(pw.length < 8) {
            Alert.alert(
                "비밀번호는 8자 이상입니다",
                "",
                [
                    {text: '확인'}
                ],
                { cancelable: false }
            );
            return;
        }
        if(pw != pw_check) {
            Alert.alert(
                "비밀번호를 확인해주세요",
                "",
                [
                    {text: '확인'}
                ],
                { cancelable: false }
            );
            return;
        }
        if(check) {
            if(check == true) {
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

    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.login_form}>
                    <View style={styles.input_container}>
                        <Text style={styles.default_text}>이메일</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} placeholder="interiorssa@smst.kr" onChangeText={this._inputEmail}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_text}>비밀번호 (8자리 이상)</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true} placeholder="●●●●●●●●" secureTextEntry={true}
                        onChangeText={this._inputPW}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_text}>비밀번호 확인</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} secureTextEntry={true} placeholder="●●●●●●●●" secureTextEntry={true}
                        onChangeText={this._inputPW2}/>
                    </View>

                    <View style={styles.input_container}>
                        <Text style={styles.default_text}>이름</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput style={styles.detail_input} placeholderTextColor={'#999999'}  placeholder="김비콘" onChangeText={this._inputName}/>
                            <TouchableOpacity style={styles.detail_btn}>
                                <Text style={styles.detail_text}>실명확인</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*<View style={styles.input_container}>
                        <Text style={styles.default_Text}>전화번호</Text>
                        <View style={{flexDirection: 'row'}}>
                          <TextInput style={styles.phone_input} placeholderTextColor={'#999999'}/>
                          <TouchableOpacity style={styles.phone_btn}>
                              <Text style={styles.detail_Text}>인증번호 전송</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.input_container}>
                        <Text style={styles.default_Text}>인증번호</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'}/>
                    </View>*/}

                    <View style={styles.input_container}>
                        <Text style={styles.default_text}>주소지입력</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.detail_input} placeholderTextColor={'#999999'} placeholder="우편번호 검색">{this.state.addr}</Text>
                            <TouchableOpacity style={styles.detail_btn}>
                                <Text style={styles.detail_text} onPress={this.openModal}>우편번호 검색</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput style={styles.input} placeholderTextColor={'#999999'} placeholder="상세주소 입력" onChangeText={this._inputAddr2}/>
                    </View>
                </View>

                <View style={styles.agree_container}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox style={styles.check_box} value={this.state.check_all} onValueChange={this.check_all} />
                        
                        <TouchableOpacity onPress={this.check_all}>
                            <Text style={{...styles.agree_text, fontWeight:'bold'}}>약관 전체동의</Text>
                        </TouchableOpacity>
                    </View> 

                    <View style={styles.agree_list}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox style={styles.check_box} value={this.state.check_1} onValueChange={this.check_1} />
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={styles.agree_text}>서울하이패스 이용약관 동의(필수)</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox style={styles.check_box} value={this.state.check_2} onValueChange={this.check_2} />
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={styles.agree_text}>개인정보 수집이용 동의(필수)</Text>
                            </TouchableOpacity>
                            
                        </View>
                        
                        {/*<View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox style={styles.check_box} value={this.state.CheckBox} onValueChange={this.check} />
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('agree')}>
                                <Text style={styles.agree_text}>마케팅 수신 동의(선택)</Text>
                            </TouchableOpacity>
                            
                        </View>*/}
                    </View>
                </View>
                <View style={styles.join_btn_container}>
                    <View style={styles.join_btn}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', height:'100%'}} onPress={this.join}>
                            <View style={styles.join_btn_shape}/>
                            <View style={styles.join_btn_shape_after}/>
                            <View style={styles.join_btn_text_wrapper} disabled>
                                <Text style={styles.join_btn_text}>회원가입</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>
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
        )
    }
}

const styles = StyleSheet.create({
    default_text: {
        color: '#000',
        paddingLeft:10,
        marginBottom:10,
        fontWeight:'bold',
        fontSize:12
    },
    detail_text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize:10
    },
    agree_text: {
        color: '#404040',
        fontSize:12
    },
    container: {
        width: '100%',
        height: '100%',
    },
    login_form:{
        //width: '70%'
        //paddingHorizontal: 25
        marginTop:20,
        marginHorizontal:40
    },
    input : {
        borderBottomWidth: 1,
        borderColor : '#828282',
        paddingLeft: 10,
        paddingBottom:2,
        fontSize:15
    },
    input_container: {
        marginBottom: 25,
        marginRight: 65
    },
    detail_input: {
        borderBottomWidth: 1,
        borderColor : '#828282',
        paddingLeft: 10,
        marginBottom:8,
        paddingBottom:2,
        width:'100%',
        fontSize:15
    },
    detail_btn: {
        backgroundColor: '#f5f5f5',
        borderRadius: 7,
        marginLeft: 12,
        textAlignVertical:'bottom',
        justifyContent:'center'
    },
    agree_container: {
        marginTop: 10,
        marginHorizontal:40,
        marginBottom:70
    },
    agree_list: {
        backgroundColor: '#f5f5f5',
        paddingTop: 25,
        borderRadius: 5
    },
    check_box: {
        marginLeft:-5,
        marginRight:12
    },
    join_btn_container: {
        width:'100%',
        marginBottom:50
    },
    join_btn: {
        position:'relative',
        width:'100%',
        height: 52,
    },
    join_btn_shape: {
        backgroundColor: '#495cdb',
        width:'90%',
        height: '100%',
        //alignSelf: 'flex-start',
    },
    join_btn_shape_after: {
        backgroundColor: 'transparent',
        width:0,
        height: 0,
        borderStyle:'solid',
        borderTopWidth:52,
        borderRightWidth:5,
        borderTopColor:'#495cdb',
        borderRightColor:'transparent'
    },
    join_btn_text_wrapper:{
        position:'absolute',
        alignItems:'center',
        justifyContent: 'center',
        top:0,
        left:0,
        right:0,
        bottom:0

        //transform:[{translateX:-37}]
    },
    join_btn_text:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16
    }
})

const StyledButton = props=> {
    
    const styles = StyleSheet.create({
        btn_container: {
            width:'100%',
            marginBottom:50
        },
        btn: {
            position:'relative',
            width:'100%',
            height: 52,
        },
        btn_shape: {
            backgroundColor: '#495cdb',
            width:'90%',
            height: '100%',
            //alignSelf: 'flex-start',
        },
        btn_shape_after: {
            backgroundColor: 'transparent',
            width:0,
            height: 0,
            borderStyle:'solid',
            borderTopWidth:52,
            borderRightWidth:5,
            borderTopColor:'#495cdb',
            borderRightColor:'transparent'
        },
        btn_text_wrapper:{
            position:'absolute',
            alignItems:'center',
            justifyContent: 'center',
            top:0,
            left:0,
            right:0,
            bottom:0
    
            //transform:[{translateX:-37}]
        },
        btn_text:{
            color:'#fff',
            fontWeight:'bold',
            fontSize:16
        }
    });

    return
        <View style={this.styles.btn_container}>
            <View style={this.styles.btn}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', height:'100%'}} onPress={()=>{}}>
                    <View style={this.styles.btn_shape}/>
                    <View style={this.styles.btn_shape_after}/>
                    <View style={this.styles.btn_text_wrapper} disabled>
                        <Text style={this.styles.btn_text}>회원가입</Text>
                    </View>
                </TouchableOpacity>      
            </View>
        </View>;
}
