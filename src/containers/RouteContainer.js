import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import SubwayBarImage from '../components/SubwayBarImage'
import axios from 'axios'

import SvgUri from 'react-native-svg-uri'


const pathKey = 'w9Mt460KZMdbmTUHJ4%2BY0R5VXWB0yTXhYNHuYATfJKf1EiQya0aYPHYTO%2FlJwWHOxkiVcx3tauCoajOgEEspuA%3D%3D';
var parseString = require('react-native-xml2js').parseString;


export default class RouteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrive: '',
            transfer: '',
            item: [],
            minute: '',
            color: {
                "1호선" : "#173463", "2호선":"#1bbf15", "3호선":"#fa6800", "4호선":"#55aafa", "5호선":"#7d1cad", "6호선":"#5e2d25", 
                "7호선":"#545c42", "8호선":"#d11f5b", "9호선":"#999762",
                "분당선":"#e3b41b", "신분당선":"#6e2b1a", "김포도시철도":"#a6710f", "경의선":"#82cfa8", "경춘선":"#338f61", "경강선":"#3052fc", 
                "수인선":"#e3be17", "인천1호선":"#7c99d6", "인천2호선":"#ebb028",
                "용인경전철":"#a1d18e", "공항철도":"#acd1f2", "의정부경전철":"#f0b30c", "우이신설경전철":"#9ba847", "서해선":"#83d463"
            },

            path:[],
            render: false,
        }
    }
    componentDidMount () {
       
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if(newProps.item != null) {
            
            this.setState({render: false, item: newProps.item}, function() {
                this._getEachPathInfo()
            })
        }
        
        
    }
    detail(item, time) {
        this.props.navigation.navigate('Detail', {item: item, time: time})
    }
    //1개 path당 걸리는 시간
    _getEachPathInfo = () => {
        for(let i = 0; i<this.state.item.length; i++) {
            this.state.item[i].subtime = 0;
            let total = 0;
            this.forceUpdate();
            for(let j = 0; j<this.state.item[i].pathList.length; j++) {
                const startX = this.state.item[i].pathList[j].fx;
                const startY = this.state.item[i].pathList[j].fy;
                const EndX = this.state.item[i].pathList[j].tx;
                const EndY = this.state.item[i].pathList[j].ty;
                
               // tmp[j] = {startX: startX, startY: startY, EndX: EndX, EndY: EndY}
                axios.get('http://ws.bus.go.kr/api/rest/pathinfo/getPathInfoBySubway?serviceKey='+pathKey+'&startX='+startX+'&startY='
                        +startY+'&endX='+EndX+'&endY='+EndY).then(response => {
                            let item = []
                            parseString(response.data, function(err, result) {
                                    item = result.ServiceResult.msgBody[0].itemList
                            })
                            
                            total = total+ Number(item[0].time)
                            this.state.item[i].subtime = total;
                            this.state.item[i].pathList[j].time = item[0].time;
                                
                            this.forceUpdate()

                            
                            if(i == this.state.item.length-1 && j == this.state.item[i].pathList.length-1) {
                                this.setState({render: true})
                            }
                        })
                    }   
        }

        return ;
    }
    _calculateFee(distance) {
        let fee = 1250;
        if(distance > 10000) {
           fee += 100;
           fee += Math.floor((distance-10000) / 5000)*100;
        }

        return fee;
    }
    _calculateTime(minute) {
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        const m = Number(minute);

        console.log(hours, min)
        if(m + min > 60) {
            hours = hours+1;
            min = m+min-60;

            if(hours >= 24) {
                hours = hours - 24
            }

        }
        else {
            min = min+m
        }

        if(min < 10) {
            min = "0"+min;
        }
        
        return hours+":"+min;

    }

    render() {
        return(
            <>
               { this.state.render && this.state.item.map((value) => {
                   const startline = value.pathList[0].routeNm+"";
                    return (
                        <View style={{width:'100%', paddingHorizontal:16}}>
                            <View style={styles.container}>
                                <View style={[styles.container_header,styles.margin_left]}>
                                    <View style={styles.container_header_text}>
                                        <Text style={{fontSize:28, fontWeight:'bold'}}>{value.time} </Text>
                                        <Text style={{fontWeight:'bold'}}>분</Text>
                                        <Text style={{fontWeight:'bold'}}> | {this._calculateTime(value.time)} 도착</Text>
                                    </View>
                                    <TouchableHighlight onPress={()=>this.detail(value, this._calculateTime(value.time) )}>
                                        <SvgUri source={require('../../assets/btn/Right_B.svg')} width="24" height="24"/>
                                    </TouchableHighlight>

                                </View>


                            
                                <Text style={[styles.container_detail,styles.margin_left]}>
                                환승 {value.pathList.length}회 | 도보 {value.time - value.subtime} 분 | {this._calculateFee(value.distance)} 원</Text>
                                <View style={styles.route_graph}>
                                    {
                                                    
                                        value.pathList.map((path) => {
                                            const width = path.time/value.subtime * 94;
                                            const line = path.routeNm+"";
                                            if(width != null) {
                                                return <SubwayBarImage width={width+'%'} time={path.time} 
                                                line={line.substring(0,1)} 
                                                color={this.state.color[path.routeNm]}/>
                                            }       
                                    })}
                                </View>
                                
                                <View style={[styles.margin_left]}> 
                                    <View style={{flexDirection: 'row', width: '100%', marginTop: 5, alignItems:'flex-start'}}>
                                        <View style={{borderRadius: 50,
                                                        width: 20,
                                                        height: 20,
                                                        backgroundColor: this.state.color[value.pathList[0].routeNm],
                                                        alignItems: 'center', justifyContent: 'center'}}>
                                                            <Text style={{color: '#fff'}}>{startline.substring(0,1)}</Text>
                                        </View>
                                        <Text>{value.pathList[0].fname}</Text>
                                    </View>
                                    

                                    <View style={{flexDirection: 'row', width: '100%', marginTop: 5}}>
                                        <View style={{width: 8, height: 30, borderRightColor: '#828282', borderRightWidth: 1
                                            , borderStyle: 'dotted'}}/>
                                        <Text style={{marginLeft: 10}}>{value.pathList[0].tname}</Text>
                                    </View>
                                    
                                </View>
                            </View>

                        </View>
                    )
                             })
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        height: 180,
        borderBottomWidth: 0,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,

        elevation: 2,

        alignItems: 'flex-start',
        paddingTop: 10,
        marginVertical: 10,
        paddingHorizontal:16
    },
    container_header: {
        flexDirection: 'row', height: '30%', alignItems: 'center', width:'100%',justifyContent:'space-between'
    },
    container_header_text: {
        flexDirection: 'row', alignItems: 'baseline'
    },
    container_detail:{
        marginBottom:10
    },
    route_graph:{
        flexDirection: 'row', alignItems: 'flex-start',
    },
    circle: {
        borderRadius: 50,
        width: 20,
        height: 20,
        backgroundColor: '#000'
    },
    margin_left:{
        marginLeft:6
    }
})