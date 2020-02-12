import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'
import Image from '../components/Image'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class MyPageScreen extends Component {
    constructor(props) {
        super(props)
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
                        
                        <TouchableOpacity style={styles.logout}>
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

                    <TouchableOpacity style={styles.list_item}>
                        <Text style={{color:'#828282'}}>회원 탈퇴</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}></View>
                <View style={styles.list}>
                    <Text style={styles.list_title}>설정</Text>

                    <TouchableOpacity style={styles.list_item} onPress={()=>this.props.navigation.navigate('Notice')}>
                        <Text style={{color:'#828282'}}>알림/공지사항</Text>
                    </TouchableOpacity >

                    <TouchableOpacity style={styles.list_item}>
                        <Text style={{color:'#828282'}}>1:1 문의</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item}>
                        <Text style={{color:'#828282'}}>FAQ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item}>
                        <Text style={{color:'#828282'}}>버전정보</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.list_item}>
                        <Text style={{color:'#828282'}}>이용약관</Text>
                    </TouchableOpacity>
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
    }
})