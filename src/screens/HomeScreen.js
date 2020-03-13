import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableHighlight, Image,  Modal, TouchableOpacity,  SafeAreaView, AsyncStorage, Alert} from 'react-native'
import CardComponent from '../components/CardComponent';
import TmoneyComponent from '../components/TmoneyComponent';
import Map from '../components/Map'
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import RNRestart from 'react-native-restart'

import SvgUri from 'react-native-svg-uri'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            pay:'credit',
            departure: '출발역을 입력해주세요',
            dep_code:'',

            destination: '도착역을 입력해주세요',
            dest_code: '',

            dep_modal: false,
            dest_modal:false,
            modal: false,
          };
    }
    _swap = () => {
        const depart = this.state.depart;
        const arrive = this.state.arrive;

        this.setState({depart: arrive, arrive: depart})
    }
    _depart = (data) => {
        this.setState({departure: data.station, dep_code: data.code})
    }
    _dest = (data) =>{
        this.setState({destination: data.station, dest_code: data.code})
    }

    _navigateMy (option){
        this.setState({modal: false})
        this.props.navigation.navigate(option);
    }
    _logout = () => {
        Alert.alert(
            "로그아웃 하시겠습니까?",
            "",
            [
                {text: '로그아웃', onPress:()=>this._logoutProcess()},
                {text: '취소'}
            ],
            { cancelable: true}
        );
    }
    _logoutProcess = () => {
        AsyncStorage.clear()
        RNRestart.Restart();
    }

    closeModal = () => {
        this.setState({modal:false})
    }

    componentDidMount() {
        this.props.navigation.setParams({
            homeLeft: (
                <View style={{flexDirection:'row', alignItems:"flex-start", width:'100%',height:'100%'}}>
                    <SvgUri source={require('../../assets/logo/Logo_2.svg')} x="0" width="290" height="100%" style={{marginLeft:-32}}/>
                </View>
            ),
            homeRight: (
                <View>
                    <TouchableOpacity onPress={()=>this.setState({modal: true})}>
                        <SvgUri source={require('../../assets/btn/My.svg')} width="24" height="24"/>
                    </TouchableOpacity>
                </View>
                
            )
        })
    }

    render() {

        return(
            <View style={{width:'100%',height:'100%',backgroundColor: '#fff'}}>
                {/*Header*/}
                <View style={styles.container}>
                    {/*Card*/}
                    {this.state.pay == 'credit' ? <CardComponent navigation={this.props.navigation}/> : <></>}

                    <View style={styles.search}>
                        <TouchableHighlight style={styles.swap} onPress={this._swap} underlayColor="none">
                            <SvgUri source={require('../../assets/btn/Change.svg')} 
                                width="24" height="24"/>
                        </TouchableHighlight>
                        <View style={{height:'100%', width:'100%', flex:1, flexDirection:'column', alignItems:'center'}}>

                            <TouchableOpacity style={styles.input} onPress={()=>this.props.navigation.navigate('StationSearch', { goBackData: this._depart})}>
                                <Text>{this.state.departure}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.input2} onPress={()=>this.props.navigation.navigate('StationSearch', { goBackData: this._dest})}>
                                <Text>{this.state.destination}</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableHighlight style={styles.swap}  underlayColor="none" onPress={()=>this.props.navigation.navigate('search', 
                            {depart:this.state.departure, dep_code:this.state.dep_code, dest_code:this.state.dest_code, arrive: this.state.destination})}>
                            <SvgUri source={require('../../assets/btn/Search.svg')} 
                                width="24" height="24"/>
                        </TouchableHighlight>
                    </View>
                </View>


                <Map/>

                <Modal visible={this.state.modal} animationType="slide" transparent={true} >
                    <View style={styles.modal_container}>
                        <TouchableOpacity style={{height:'60%', width: '100%'}} onPress={this.closeModal}>
                        </TouchableOpacity>
                        <View style={styles.modal_content}>
                            <View style={styles.modal_title_content}>
                                <Text style={styles.modal_title}>개인 설정</Text>
                                <TouchableHighlight style={{position: 'absolute', right: 0}} onPress={this.closeModal}>
                                    <AntDesign name="close" size={25} color={"#465cdb"} />
                                </TouchableHighlight>
                            </View>
                            <TouchableOpacity style={styles.modal_list} onPress={()=>this._navigateMy('MyModi')}>
                                <Text style={{fontWeight: 'bold'}}>내 정보 변경</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modal_list} onPress={()=>this._navigateMy('My')}>
                                <Text style={{fontWeight: 'bold'}}>이용 내역</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modal_list} onPress={this._logout}>
                                <Text style={{fontWeight: 'bold'}}>로그아웃</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: '3%',
        marginHorizontal:24
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 35,
        marginTop: 10,
        marginBottom:15,
        alignItems: 'center',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
    },
   search: {
        backgroundColor: '#fff',
        width: '100%',
        height:80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2, 
        marginTop:16,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
      
    },
    swap: {
        width:'8%',
        marginHorizontal:'4%'
    },
    line: {
        backgroundColor: '#e0e0e0',
        height: 1,
        width:'100%',

    },
    input: {
        width: '100%',
        paddingLeft:12,
        justifyContent: 'center',
        borderBottomColor: '#00000099',
        borderBottomWidth:0.5,
        flex:1,
    },
    input2: {
        width: '100%',
        paddingLeft:12,
        justifyContent: 'center',  
        flex:1,     
    },
    list: {
        width:'90%',
        height: 80,
        position: 'relative',
        zIndex:2000,
        margin:0
    },
    listItem: {
        borderBottomWidth: 0.5,
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20
    },
    listText: {
        fontSize: 17,
        color: '#828282',
        
    },
    modal_container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
    },
    modal_content: {
        height: '33%',
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0
    },
    modal_title: {
        fontWeight: 'bold'
    },
    modal_title_content: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        height: '25%',
        borderBottomColor: '#828282',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_list: {
        height: '25%',
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center'
    }
})