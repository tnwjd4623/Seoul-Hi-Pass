import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableHighlight, Image,  Modal, TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent';
import TmoneyComponent from '../components/TmoneyComponent';
import Map from '../components/Map'
import Autocomplete from 'react-native-autocomplete-input'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            pay:'tmoney',
            departure: '출발역을 입력해주세요',
            dep_code:'',

            destination: '도착역을 입력해주세요',
            dest_code: '',

            dep_modal: false,
            dest_modal:false,
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
    render() {

        return(
            <View style={{paddingTop: StatusBar.currentHeight, backgroundColor: '#fff', height:'100%'}}>
                <Header navigation={this.props.navigation}/>
                {this.state.pay == 'credit' ? <CardComponent navigation={this.props.navigation}/> : <></>}
                {this.state.pay == 'tmoney'? <TmoneyComponent navigation={this.props.navigation} setting={true}/> : <></>}

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
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        height:'45%',
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
        alignItems: 'center',
        justifyContent:'center'
    },
    modal_content: {
        height: '40%',
        width: '70%',
        backgroundColor: '#fff',
        alignItems:'center',
        borderRadius:10,
       
    },
    modal_input: {
        padding:0,
        height:50,
        justifyContent: 'center',
        borderWidth:0,
        borderBottomWidth:0.5
    }
})