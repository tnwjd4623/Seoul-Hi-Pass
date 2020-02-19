import React, { Component } from 'react'
import {Text, View, StyleSheet, Platform, StatusBar, TouchableHighlight} from 'react-native'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent';
import TmoneyComponent from '../components/TmoneyComponent';
import {MaterialIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
import Map from '../components/Map'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            pay:'tmoney',
          };
    }
    _depart = text => {
        this.setState({depart: text})
    }
    _arrive = text => {
        this.setState({arrive: text})
    }
    _swap = () => {
        const depart = this.state.depart;
        const arrive = this.state.arrive;

        this.setState({depart: arrive, arrive: depart})
    }

    render() {
        return(
            <View style={{paddingTop: StatusBar.currentHeight, backgroundColor: '#fff', height:'100%'}}>
                <Header navigation={this.props.navigation}/>
                {this.state.pay == 'credit' ? <CardComponent navigation={this.props.navigation}/> : <></>}
                {this.state.pay == 'tmoney'? <TmoneyComponent navigation={this.props.navigation} setting={true}/> : <></>}

                <View style={styles.search}>
                    <TouchableHighlight style={styles.swap} onPress={this._swap}>
                        <MaterialIcons name="swap-vert" size={30} color="#465cdb"/>
                    </TouchableHighlight>
                    <View style={{width: '70%', marginRight: 10}}>
                        <TextInput style={styles.input} placeholder="출발역을 입력해주세요" placeholderTextColor="#000"
                            onChangeText={this._depart}/>
                        <View style={styles.line}/>
                        <TextInput style={styles.input} placeholder="도착역을 입력해주세요" placeholderTextColor="#000"
                            onChangeText={this._arrive}/>
                    </View>
                    <TouchableHighlight style={styles.swap} onPress={()=>this.props.navigation.navigate('search', 
                        {depart:'xx역', arrive: 'yy역'})}>
                        <MaterialIcons name="search" size={30} color="#465cdb"/>
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
        height:80,
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
        paddingLeft: 20
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
        width: '100%',
        marginLeft: 20
    }
})