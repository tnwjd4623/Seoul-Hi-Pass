import React, { Component } from 'react'
import {StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, AsyncStorage, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export default class InfoModifyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            id: '',
        }
    }
    componentDidMount() {
        AsyncStorage.getItem("id").then(asyncStorageRes => {
            this.setState({id: asyncStorageRes})
        })
        AsyncStorage.getItem("email").then(asyncStorageRes => {
            this.setState({email: asyncStorageRes})
        })
        
    }
    render() {
        return(
            <>
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
                </ScrollView>

                </View>
                <TouchableOpacity style={styles.join_btn} onPress={()=>this.props.navigation.pop()}>
                    <Text style={styles.joinText}>정보수정</Text>
                </TouchableOpacity>
            </View>
            </>
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
        height: '70%',
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