import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableHighlight, Alert, StatusBar, TouchableOpacity, Image, AsyncStorage, ScrollView, FlatList} from 'react-native'
import Modal from 'react-native-modal'
import {AntDesign} from '@expo/vector-icons'
import CardComponent from '../components/CardComponent'
import axios from 'axios'
const apiKey = "beacon091211fX2TAJS0VbillUWp1aVx002VggT";

export default class MyPageScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            target: 1,
            id: "",
            item: [],
            since: 0,
            refreshing: false,

        }
    }
    componentDidMount() {
        AsyncStorage.getItem("id").then(asyncStorageRes => {
            this.setState({id: asyncStorageRes}, function() {
                this._emoney_list(0);
            })
        })
    }
    _emoney_list = (since) => {
        let list = [];
        axios.get("https://beacon.smst.kr/appAPI/v1/emoney/emoney_list.php?apiKey="
        +apiKey+"&modeType=list&since="+since+"&per_page=10&muid="+this.state.id).then(response => {
            console.log(response.data);
            list = response.data; 
            const merge = [...this.state.item, ...list];
            if(list.length > 0)
                this.setState({item: merge, since: since+10, refreshing: false})

        })
    }
    _scrollHandler = () => {
        this._emoney_list(this.state.since);
    }
    _handleRefresh = () => {
        this.setState({refreshing: true, since: 0, item:[]}, this._emoney_list(0))
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
    _renderItem = ({item}) => (  
        <View style={styles.list}>
            <View style={{flexDirection:'row', marginTop: 20}}>
                <Text style={styles.date}>{item.regdate}</Text>
                <Text style={styles.station}>{item.contents}</Text>
                <View>
                    <Text style={styles.price}>{item.amount}</Text>
                    <Text style={styles.balance}>남은 금액 {item.balance}</Text>
                </View>
            </View>
        </View>
    )
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

                <CardComponent navigation={this.props.navigation} setting={true}/>

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

                    <FlatList
                        style={{height: "50%"}}
                        data={this.state.item}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => item.id}
                        onEndReached={this._scrollHandler}
                        refreshing={this.state.refreshing}
                        onRefresh={this._handleRefresh}
                       /> 
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
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 80
    },
    date:{
        width: '40%'
    },
    station: {
        width: '40%',
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    balance: {
        fontSize: 11
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