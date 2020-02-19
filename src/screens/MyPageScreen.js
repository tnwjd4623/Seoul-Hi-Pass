import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, Alert, StatusBar} from 'react-native'
import Modal from 'react-native-modal'
import {AntDesign} from '@expo/vector-icons'
import CardComponent from '../components/CardComponent'
import { ScrollView } from 'react-native-gesture-handler'

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
            <View style={{paddingTop: StatusBar.currentHeight, height:'100%', backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <Text style={{fontSize: 25, color:'#465cdb', fontWeight: 'bold', width: '90%'}}>MY PAGE</Text>
                    <TouchableHighlight onPress={()=>this.props.navigation.popToTop()}>
                        <AntDesign name="close" size={25} color='#465cdb'/>
                    </TouchableHighlight>
                </View>

                <CardComponent navigation={this.props.navigation}/>

                <View style={styles.container}>
                    <Text style={styles.title}>이용 내역</Text>
                    <ScrollView>
                        <View style={styles.list}>
                            <View style={{flexDirection:'row', marginTop: 20}}>
                                <Text style={styles.date}>1.18 (화)</Text>
                                <Text style={styles.station}>선릉역</Text>
                                <Text style={styles.price}>1,250 원</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop: 20}}>
                                <Text style={styles.date}></Text>
                                <Text style={styles.station}>삼성역</Text>
                                <Text style={styles.price}>1,250 원</Text>
                            </View>
                        </View>

                        <View style={styles.list}>
                            <View style={{flexDirection:'row', marginTop: 20}}>
                                <Text style={styles.date}>1.18 (화)</Text>
                                <Text style={styles.station}>선릉역</Text>
                                <Text style={styles.price}>1,250 원</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop: 20}}>
                                <Text style={styles.date}></Text>
                                <Text style={styles.station}>삼성역</Text>
                                <Text style={styles.price}>1,250 원</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    container: {
        marginTop: 20
    },
    title: {
        marginLeft: 20,
        color: '#465cdb',
        fontSize: 15,
        fontWeight: 'bold'
    },
    list: {
        width: '100%',
        borderBottomWidth: 1,
        padding:20
    },
    date:{
        width: '20%'
    },
    station: {
        width: '60%',
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold'
    }

    
})