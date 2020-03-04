import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableHighlight, Alert, StatusBar, TouchableOpacity, Image} from 'react-native'
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
            target: 1,
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
    _changeList(target) {
        this.setState({target: target})
    }
    render() {
        return(
            <View style={{paddingTop: StatusBar.currentHeight, height:'100%', backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <View style={{width: '90%', height: '100%'}}>
                        <Image resizeMode="contain" source={require('../../assets/Mypage_1.png')} 
                            style={{width: '55%', height:'100%', marginLeft: -10}}/>
                    </View>

                    <TouchableHighlight onPress={()=>this.props.navigation.popToTop()}>
                        <AntDesign name="close" size={35} color='#5e5e5e'/>
                    </TouchableHighlight>
                </View>

                <CardComponent navigation={this.props.navigation}/>

                <View style={styles.container}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>이용 내역</Text>

                        {this.state.target == 1 ? <TouchableOpacity style={styles.btn} onPress={()=>this._changeList(1)}> 
                            <Text style={{color: '#fff'}}>1개월</Text>
                        </TouchableOpacity> : <TouchableOpacity style={styles.btn2} onPress={()=>this._changeList(1)}>
                            <Text>1개월</Text>
                        </TouchableOpacity> }
                        
                        {this.state.target == 2 ? <TouchableOpacity style={styles.btn} onPress={()=>this._changeList(2)}>
                            <Text style={{color: '#fff'}}>2개월</Text>
                        </TouchableOpacity> : <TouchableOpacity style={styles.btn2} onPress={()=>this._changeList(2)}>
                            <Text>2개월</Text>
                        </TouchableOpacity> }


                        {this.state.target == 3 ? <TouchableOpacity style={styles.btn} onPress={()=>this._changeList(3)}>
                            <Text style={{color: '#fff'}}>3개월</Text>
                        </TouchableOpacity> : <TouchableOpacity style={styles.btn2} onPress={()=>this._changeList(3)}>
                            <Text>3개월</Text>
                        </TouchableOpacity> }
                    </View>

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
        flexDirection: 'row'
    },
    container: {
        marginTop: 20
    },
    title: {
        marginLeft: 20,
        color: '#465cdb',
        fontSize: 15,
        fontWeight: 'bold',
        width: '40%'
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
    },
    btn: {
        borderRadius: 30,
        width: 70, 
        height: 30,
        backgroundColor: '#465cdb',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    btn2: {
        borderRadius: 30,
        width: 70, 
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#465cdb',
        borderWidth: 1,
        marginRight: 5
    }

    
})