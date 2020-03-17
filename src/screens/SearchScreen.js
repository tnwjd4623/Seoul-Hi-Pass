import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableHighlight, StatusBar, Image, ScrollView, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import RouteContainer from '../containers/RouteContainer'
import axios from 'axios'
import Toast from 'react-native-simple-toast'


const gpsKey = '5743714d496c736a35387a7047544a';
const pathKey = 'FI9hHlDS2Gr%2FxSZe6VIbL2h6TOv%2Bom0ye60SNfxCnVlz4SnPEBWzjfoSYTC%2BSBILqOFiWKaIt48dGUX2GKaJtQ%3D%3D';
var parseString = require('react-native-xml2js').parseString;

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

            path: [],
            current_time: "오늘 "+new Date().getHours()+":"+new Date().getMinutes(),
            limit_access: false,
        }
    }
    componentDidMount () {
        const depart = this.props.navigation.getParam('depart')
        const arrive = this.props.navigation.getParam('arrive');
        const dep_code = this.props.navigation.getParam('dep_code');
        const dest_code = this.props.navigation.getParam('dest_code');
        
        this.setState({depart: depart, arrive: arrive, dep_code: dep_code, dest_code: dest_code}, function() {
            this._getPathInfo()
        })
    }
   
    //최단 경로 찾기
    _getPathInfo = () => {
        //출발점 좌표 조회
        axios.get('http://openapi.seoul.go.kr:8088/'+gpsKey+'/json/SearchLocationOfSTNByFRCodeService/1/1/'
            +this.state.dep_code+'/')
            .then(response => 
                { this.setState({startY: response.data.SearchLocationOfSTNByFRCodeService.row[0].XPOINT_WGS, 
                    startX: response.data.SearchLocationOfSTNByFRCodeService.row[0].YPOINT_WGS}, function () {
                        //도착점 좌표 조회
                        axios.get('http://openapi.seoul.go.kr:8088/'+gpsKey+'/json/SearchLocationOfSTNByFRCodeService/1/1/'+this.state.dest_code+'/')
                        .then( result =>
                            {       this.setState({EndY: result.data.SearchLocationOfSTNByFRCodeService.row[0].XPOINT_WGS, 
                                    EndX: result.data.SearchLocationOfSTNByFRCodeService.row[0].YPOINT_WGS}, function() {
                                        const startX = this.state.startX; const EndX = this.state.EndX
                                        const startY = this.state.startY; const EndY = this.state.EndY
                                        //경로 가져오기
                                        axios.get('http://ws.bus.go.kr/api/rest/pathinfo/getPathInfoBySubway?serviceKey='+pathKey+'&startX='+startX+'&startY='
                                        +startY+'&endX='+EndX+'&endY='+EndY).then(path => {
                                            let item = []
                                            parseString(path.data, function(err, result) {
                                               item = result.ServiceResult.msgBody[0].itemList
                                              
                                                if(result.ServiceResult.msgBody[0] == "") {
                                                    Toast.show(result.ServiceResult.msgHeader[0].headerMsg[0]);
                                                    item = []
                                                    return;
                                                }
                                            })
                                            
                                            this.setState({path: item})     
                                    })
                                })
                            }) 
                    }
                )})
    }

    _swap = () => {
        const depart = this.state.depart;
        const arrive = this.state.arrive;
        const dep_code = this.state.dep_code;
        const dest_code = this.state.dest_code;

        this.setState({depart: arrive, arrive: depart, dep_code: dest_code, dest_code: dep_code})
    }
    _init = () => {
        this.props.navigation.pop();
    }
    _depart = (data) => {
        this.setState({depart: data.station, dep_code: data.code})
    }
    _dest = (data) =>{
        this.setState({arrive: data.station, dest_code: data.code})
    }

    _renderElement = (item) => {
        return(

            <ScrollView>
                <RouteContainer navigation={this.props.navigation} item={item} />
            </ScrollView>
        )
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

                        <TouchableOpacity style={styles.input} onPress={()=>this.props.navigation.navigate('StationSearch', { goBackData: this._depart})}>
                            <Text style={{fontSize: 15}}>{this.state.depart}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.input2} onPress={()=>this.props.navigation.navigate('StationSearch', { goBackData: this._dest})}>
                            <Text style={{fontSize: 15}}>{this.state.arrive}</Text>
                        </TouchableOpacity>
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

                <View style={{width: '90%', alignSelf: 'center', height: 30, justifyContent: 'center'}}>
                    <Text style={{fontSize: 15, color: '#465cdb', fontWeight: 'bold'}}>{this.state.current_time}  출발</Text>
                </View>
                <ScrollView>
                <RouteContainer navigation={this.props.navigation} item={this.state.path} />
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
    icon: {
        width: '10%',
        marginLeft: 10
    },
    
})