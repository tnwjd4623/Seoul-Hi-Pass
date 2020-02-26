import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableHighlight, StatusBar, Image} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import SubwayBarImage from '../components/SubwayBarImage'
import RouteContainer from '../containers/RouteContainer'
import { ScrollView } from 'react-native-gesture-handler'

export default class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            depart: '',
            arrive: '',
            item: [
                {
                    line: 2,
                    minute: 10
                },
                {
                    line: 1,
                    minute: 5
                },
                {
                    line:2,
                    minute:5
                }
            ],
            item2: [
                {
                    line: 2,
                    minute: 20
                }
            ]
        }
    }
    componentDidMount () {
        const depart = this.props.navigation.getParam('depart')
        const arrive = this.props.navigation.getParam('arrive');

        this.setState({depart: depart, arrive: arrive})
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
    _init = () => {
        this.setState({depart: "", arrive: ""})
    }
    render() {
        return(
            <View style={{paddingTop:StatusBar.currentHeight, width: '100%', height: '100%', backgroundColor: '#fff'}}>
                <View style={styles.search}>
                    <TouchableHighlight style={styles.swap} onPress={this._swap}>
                        <Image resizeMode="contain" source={require('../../assets/Change.png')} 
                            style={{width: '100%', height:'70%'}}/>
                    </TouchableHighlight>
                    <View style={{width: '70%', marginRight: 10}}>
                        <TextInput style={styles.input} placeholder="출발역을 입력해주세요" placeholderTextColor="#000"
                            onChangeText={this._depart} defaultValue={this.state.depart}/>
                        <View style={styles.line}/>
                        <TextInput style={styles.input} placeholder="도착역을 입력해주세요" placeholderTextColor="#000"
                            onChangeText={this._arrive} defaultValue={this.state.arrive}/>
                    </View>

                    <View style={styles.icon}>
                        <TouchableHighlight onPress={this._init}>
                            <MaterialIcons name="close" size={35} color="#5e5e5e"/>
                        </TouchableHighlight>

                        <TouchableHighlight>
                        <Image resizeMode="contain" source={require('../../assets/Search.png')} 
                            style={{width: '100%', height:'52%', marginTop: 5}}/>
                        </TouchableHighlight>
                    </View>
                    
                </View>

                <ScrollView>
                    <RouteContainer navigation={this.props.navigation} 
                        minute={20} item={this.state.item} arrive={"09:52"} transfer={1}/>
                    <RouteContainer minute={20} item={this.state.item2} arrive={"09:52"} transfer={0}/>
                </ScrollView>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    search: {
        backgroundColor: '#fff',
        width: '100%',
        height:100,
        marginTop:20,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        borderBottomWidth: 5,
        borderColor: '#e3e3e3'
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
        marginLeft: 20,
        fontSize: 17
    },
    icon: {
        width: '10%',
        marginLeft: 10
    },
    
})