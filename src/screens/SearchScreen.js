import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableHighlight, StatusBar, Image} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import RouteContainer from '../containers/RouteContainer'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'


const gpsKey = '5743714d496c736a35387a7047544a';
const pathKey = 'zJAqMbeplL5DHNnwY00zhzBEqz4NOelbiI5Oir5QmkLI%2BMNfEcQmSPyRtDZVzDjIRHeKSSG%2B%2BscjNosmgeHlEQ%3D%3D';


export default class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            depart: '',
            dep_code: '',

            arrive: '',
            dest_code: '',

            startX: '',
            startY: '',

            EndX: '',
            EndY: '',

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
        const dep_code = this.props.navigation.getParam('dep_code');
        const dest_code = this.props.navigation.getParam('dest_code');
        
        this.setState({depart: depart, arrive: arrive, dep_code: dep_code, dest_code: dest_code})
    }
   
    //최단 경로 찾기
    _getPathInfo = () => {
        axios.get('http://openapi.seoul.go.kr:8088/'+gpsKey+'/json/SearchLocationOfSTNByFRCodeService/1/1/'
            +this.state.dep_code+'/')
            .then(response => 
                { this.setState({startY: response.data.SearchLocationOfSTNByFRCodeService.row[0].XPOINT_WGS, 
                    startX: response.data.SearchLocationOfSTNByFRCodeService.row[0].YPOINT_WGS}, function () {
                        axios.get('http://openapi.seoul.go.kr:8088/'+gpsKey+'/json/SearchLocationOfSTNByFRCodeService/1/1/'+this.state.dest_code+'/')
                        .then( result =>
                            {       this.setState({EndY: result.data.SearchLocationOfSTNByFRCodeService.row[0].XPOINT_WGS, 
                                    EndX: result.data.SearchLocationOfSTNByFRCodeService.row[0].YPOINT_WGS}, function() {
                                        const startX = this.state.startX; const EndX = this.state.EndX
                                        const startY = this.state.startY; const EndY = this.state.EndY

                                        //console.log(startX)
                                        axios.get('http://ws.bus.go.kr/api/rest/pathinfo/getPathInfoBySubway?serviceKey='+pathKey+'&startX='+startX+'&startY='
                                        +startY+'&endX='+EndX+'&endY='+EndY).then(path => {
                                            console.log(JSON.parse(JSON.stringify(path)))
                                    })
                                })
                            }) 
                    }
                )})
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

                        <TouchableHighlight onPress={this._getPathInfo}>
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