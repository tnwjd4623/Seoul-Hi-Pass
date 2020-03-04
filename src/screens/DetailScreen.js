import React, { Component } from 'react'
import {View, StyleSheet, Text,TouchableHighlight, Image} from 'react-native'
import SubwayBarImage from '../components/SubwayBarImage'
import SubwayHorizonBar from '../components/SubwayHorizonBar'

export default class DetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                pathList:[]
            },
            color: {
                "1호선" : "#173463", "2호선":"#1bbf15", "3호선":"#fa6800", "4호선":"#55aafa", "5호선":"#7d1cad", "6호선":"#5e2d25", 
                "7호선":"#545c42", "8호선":"#d11f5b", "9호선":"#999762",
                "분당선":"#e3b41b", "신분당선":"#6e2b1a", "김포도시철도":"#a6710f", "경의선":"#82cfa8", "경춘선":"#338f61", "경강선":"#3052fc", 
                "수인선":"#e3be17", "인천1호선":"#7c99d6", "인천2호선":"#ebb028",
                "용인경전철":"#a1d18e", "공항철도":"#acd1f2", "의정부경전철":"#f0b30c", "우이신설경전철":"#9ba847", "서해선":"#83d463"
            },
            time: ''
        }
    }
    componentDidMount () {
        const item = this.props.navigation.getParam('item')
        const time = this.props.navigation.getParam('time')
        this.setState({item: item, time: time})
        console.log(item.pathList)
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row', height: '10%', alignItems: 'center', width:'90%'}}>
                    <Text style={{fontSize:30, fontWeight:'bold', marginTop: -10}}>{this.state.item.time} </Text>
                    <Text style={{fontWeight:'bold'}}>분</Text>
                    <Text style={{fontWeight:'bold'}}>  {this.state.time}  도착</Text>
                </View>

                <Text style={{width:'90%', height:'5%'}}>환승 1회 | 1,250 원</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', width:'90%', marginBottom: 20}}>
                    {
                        this.state.item.pathList.map((value) => {
                            var width = value.time/this.state.item.subtime * 94;
                            const line = value.routeNm+"";
                            return <SubwayBarImage width={width+'%'} time={value.time} line={line.substring(0,1)} 
                            color={this.state.color[line]}/>
                        })
                       }
                    
                </View>

                {
                    this.state.item.pathList.map((value, index)=> {
                        const line = value.routeNm+"";
                        return(
                            <View style={styles.horizon_Container}>
                                <View style={{flexDirection: 'row'}}>
                                    <SubwayHorizonBar color={this.state.color[line]} 
                                    end={index == this.state.item.pathList.length-1 ? true : false} height={100}/>
                                        <View style={styles.station_container}>
                                            <Text style={styles.title}>{line} {value.fname} 승차</Text>
                                            <Text style={styles.subtitle}>XX역 방면</Text>                                
                                            <Text style={styles.text}>{value.railLinkList.length}개 역 이동</Text>
                                            <Text style={styles.title2}>
                                                {index == this.state.item.pathList.length-1 ? value.tname+' 하차': ""} </Text>
                                        </View>
                                </View>
                            </View>
                        )
                    })
                }
                

               

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    horizon_Container: {
        width: '90%',
        height: 120,
    },
    station_container: {
        marginLeft: 10,
        height: 100,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
    },
    subtitle: {
      
        marginBottom: 5
    },
    text: {
        marginTop: 10,
        color: '#828282'
    },
    title2: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
    }
})