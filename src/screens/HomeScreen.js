import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableHighlight, Image,  Modal, 
    TouchableOpacity,  SafeAreaView, AsyncStorage, Alert, Button} from 'react-native'
import CardComponent from '../components/CardComponent';
import Map from '../components/Map'
import RNRestart from 'react-native-restart'
import KakaoLogins from '@react-native-seoul/kakao-login';


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
    kakaoLogout = () => {
        KakaoLogins.logout().then(result => {
            
        }).catch(err => {
            
        })
    }
  
    _logoutProcess = () => {
        this.kakaoLogout();

        AsyncStorage.clear()
        RNRestart.Restart();
    }
    closeModal = () => {
        this.setState({modal: false})
    }
    openModal = () => {
        this.setState({modal: true})
    }
    render() {

        return(
            <View style={{paddingTop: StatusBar.currentHeight, backgroundColor: '#fff', height:'100%'}}>
                {/*Header*/}
                <SafeAreaView style={styles.header}>
                    <View style={{width:'90%'}}>
                        <Image resizeMode="contain" source={require('../../assets/Logo_2.png')}
                            style={{width: '100%', height: '60%', marginLeft: '-10%'}}/>
                    </View>
                    <TouchableHighlight style={{width:"10%"}} onPress={()=>this.setState({modal: true})}>
                        <Image resizeMode="contain" 
                            source={require('../../assets/My_page.png')} style={{width: '100%', height: '60%'}}/>
                    </TouchableHighlight>
                </SafeAreaView>

                {/*Card*/}
                {this.state.pay == 'credit' ? <CardComponent navigation={this.props.navigation}/> : <></>}

                <View style={styles.search}>
                    <TouchableHighlight style={styles.swap} onPress={this._swap}>
                        <Image resizeMode="contain" source={require('../../assets/Change.png')} 
                            style={{width: '100%', height:'70%'}}/>
                    </TouchableHighlight>
                    <View style={{width: '70%', marginRight: 10, height:'100%'}}>

                        <TouchableOpacity style={styles.input} onPress={()=>this.props.navigation.navigate('StationSearch', { goBackData: this._depart})}>
                            <Text>{this.state.departure}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.input2} onPress={()=>this.props.navigation.navigate('StationSearch', { goBackData: this._dest})}>
                            <Text>{this.state.destination}</Text>       
                        </TouchableOpacity>
                        
                    </View>

                    <TouchableHighlight style={styles.swap} onPress={()=>this.props.navigation.navigate('search', 
                        {depart:this.state.departure, dep_code:this.state.dep_code, dest_code:this.state.dest_code, arrive: this.state.destination})}>
                        <Image resizeMode="contain" source={require('../../assets/Search.png')} 
                            style={{width: '100%', height:'70%'}}/>
                    </TouchableHighlight>
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
                                <Image resizeMode="contain" source={require('../../assets/Cancel.png')} 
                                style={{width: 30, height: 30}} />
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
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        paddingRight: 10
    },
   search: {
        backgroundColor: '#fff',
        width: '80%',
        height:90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2, 
        marginTop:20,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,

  
    },
    swap: {
        width:'10%'
    },
    line: {
        backgroundColor: '#e0e0e0',
        height: 1,
        width:'100%'
    },
    input: {
        width: '90%',
        marginLeft: 20,
        height: '45%',
        justifyContent: 'center',
        borderBottomColor: '#828282',
        borderBottomWidth:0.5

    },
    input2: {
        width: '90%',
        marginLeft: 20,
        height:'45%',
        justifyContent: 'center',       
        
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