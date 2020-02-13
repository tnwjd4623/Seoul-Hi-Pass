import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, Alert} from 'react-native'
import Image from '../components/Image'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-gesture-handler'

export default class MyPageScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Version: false,
            Term: false,
            logout: false,
            quit: false,
        }
    }
    closeModal = () => {
        this.setState({Version: false, Term: false, quit: false})
    }
    logout = () => {
        Alert.alert(
            '로그아웃 하시겠습니까?',
            '',
            [
                {
                    text: '네',
                    onPress: ()=> console.log('ok'),
                },
                {
                    text: '아니오',
                    onPress: () => console.log('cancel'),
                    style: 'cancel'
                }
            ],
            {cancelable: false}
        )
    }
    render() {
        return(
            <>
                <View style={styles.header}>
                    <Text style={{fontSize: 17, color:'#828282'}}>마이페이지</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                                width={70}
                                height={70}
                                borderRadius={100/2}/>
                        <View style={styles.profile}>
                            <Text style={styles.name}>맛집정복</Text>
                            <Text style={styles.email}>test@test.ac.kr</Text>
                        </View>
                        
                        <TouchableOpacity style={styles.logout} onPress={this.logout}>
                            <Text>로그아웃</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.line}></View>
                <View style={styles.list}>
                    <Text style={styles.list_title}>마이페이지</Text>
                    <TouchableOpacity style={styles.list_item} onPress={()=>this.props.navigation.navigate('MyInfo')}>
                        <Text style={{color:'#828282'}}>내 정보 수정</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.props.navigation.navigate('MyReview')}>
                        <Text style={{color:'#828282'}}>나의 리뷰</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.props.navigation.navigate('MyPay')}>
                        <Text style={{color:'#828282'}}>지난 결제 내역</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.setState({quit: true})}>
                        <Text style={{color:'#828282'}}>회원 탈퇴</Text>
                    </TouchableOpacity>

                    {/*회원 탈퇴 모달*/}
                    <Modal isVisible={this.state.quit}>
                        <View style={styles.modal}>

                            <View style={styles.modal_content}>
                                <View style={{flexDirection: 'row', 
                                alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                <Text style={styles.orderTitle}>정말로 탈퇴하시겠습니까?</Text>
                                    <TouchableHighlight style={{position:'absolute', right:0, marginRight:10}} onPress={this.closeModal}>
                                        <Icon name="close" size={30} color="gray"/>
                                    </TouchableHighlight>
                                </View>

                                <TextInput style={styles.input} placeholder={"탈퇴사유"} placeholderTextColor={"#828282"}/>

                                <View style={{flexDirection: 'row', marginTop: 30}}>
                                    <TouchableOpacity style={styles.btn} onPress={this.closeModal}>
                                        <Text>취소</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.btn} onPress={this.closeModal}>
                                        <Text>확인</Text>
                                    </TouchableOpacity>
                                </View>
                            

                            </View>
                        </View>
                    </Modal>
                    {/* ------------------- */}
                </View>

                <View style={styles.line}></View>
                <View style={styles.list}>
                    <Text style={styles.list_title}>설정</Text>

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.props.navigation.navigate('Notice')}>
                        <Text style={{color:'#828282'}}>알림/공지사항</Text>
                    </TouchableOpacity >

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.props.navigation.navigate('Question')}>
                        <Text style={{color:'#828282'}}>1:1 문의</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.props.navigation.navigate('FAQ')}>
                        <Text style={{color:'#828282'}}>FAQ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.setState({Version: true})}>
                        <Text style={{color:'#828282'}}>버전정보</Text>
                    </TouchableOpacity>
                    {/* 버전정보 */}
                    <Modal isVisible={this.state.Version}>
                        <View style={styles.modal}>

                            <View style={styles.modal_content}>
                                <View style={{flexDirection: 'row', 
                                alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                <Text style={styles.orderTitle}>버전 정보</Text>
                                    <TouchableHighlight style={{position:'absolute', right:0, marginRight:10}} onPress={this.closeModal}>
                                        <Icon name="close" size={30} color="gray"/>
                                    </TouchableHighlight>
                                </View>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                    </Modal>
                    {/* ------------------- */}

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.setState({Term:true})}>
                        <Text style={{color:'#828282'}}>이용약관</Text>
                    </TouchableOpacity>

                    {/*이용 약관*/}
                    <Modal isVisible={this.state.Term}>
                        <View style={styles.modal}>

                            <View style={styles.modal_content}>
                                <View style={{flexDirection: 'row', 
                                alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                <Text style={styles.orderTitle}>이용약관</Text>
                                    <TouchableHighlight style={{position:'absolute', right:0, marginRight:10}} onPress={this.closeModal}>
                                        <Icon name="close" size={30} color="gray"/>
                                    </TouchableHighlight>
                                </View>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                    </Modal>
                    {/* ------------------- */}
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: '45%',
        justifyContent: 'center',
        marginLeft: 20
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#8a8a8a'
    },
    email: {
        color: '#828282'
    },
    logout: {
        backgroundColor: '#d9d9d9',
        borderRadius: 5,
        width: 80,
        height: 20,
        alignItems: 'center',
        marginTop: 10
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#d9d9d9',
        alignSelf: 'center',
        marginTop: 30
    },
    list: {
        justifyContent: 'center',
        width: '90%',
        marginTop: 10,
        alignSelf: 'center'
    },
    list_title: {
        fontWeight: 'bold',
        color: '#828282'
    },
    list_item: {
        width: '80%',
        alignSelf: 'center',
        height: 30,
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: '#e6e6e6',
        height: '95%', width: '90%', alignSelf: 'center',
        borderRadius: 20,

    },
    modal_content: {
        height: '87%',
        alignItems: 'center'
    },
    line: {
        backgroundColor: '#999999',
        height: 1,
        width: '90%',
        margin: 10,
    },
    orderTitle: {
        fontSize: 18,
        color: '#828282',
        textAlign: 'center',
        marginTop: 10
    },
    input: {
        width: '95%',
        height: '75%',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    btn: {
        backgroundColor: '#828282',
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20
    }
})