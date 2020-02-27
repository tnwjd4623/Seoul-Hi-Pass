import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import SubwayBarImage from '../components/SubwayBarImage'

export default class RouteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrive: '',
            transfer: '',
            item: [],
            minute: '',
            color: {
                "01호선" : "", "02호선":"", "03호선":"", "04호선":"", "05호선":"", "06호선":"", "07호선":"", "08호선":"", "09호선":"",
                "분당선":"", "신분당선":"", "김포도시철도":"", "경의선":"", "경춘선":"", "경강선":"", "수인선":"", "인천선":"", "인천2호선":"",
                "용인경전철":"", "공항철도":"", "의정부경전철":"", "우이신설경전철":"", "서해선":"", "김포도시철도":""
            }
        }
    }
    componentDidMount () {
       
    }
    componentWillReceiveProps(newProps) {
        this.setState({item: newProps.item})
    }
    detail = () => {
        this.props.navigation.navigate('Detail', {item: this.state.item, transfer: this.state.transfer, minute: this.state.minute})
    }
    render() {
        return(
            <>
                    {
                        this.state.item.map((value) => {
                            console.log(value)
                            return (
                            
                                <View style={styles.container}>
                                    <View style={{flexDirection: 'row', height: '30%', alignItems: 'center', width:'90%'}}>
                                        <Text style={{fontSize:30, fontWeight:'bold', marginTop: -10}}>{value.time} </Text>
                                        <Text style={{fontWeight:'bold'}}>분</Text>
                                        <Text style={{fontWeight:'bold'}}> | {this.state.arrive} 도착</Text>
                                        <TouchableHighlight onPress={this.detail} style={{position:'absolute', right:0, width: '10%', height:'50%'}}>
                                            <Image resizeMode="contain" source={require('../../assets/Right_B.png')}
                                                style={{width: '100%', height:'100%'}}/>
                                        </TouchableHighlight>
                                    </View>
                    
                                    <Text style={{width:'90%', height:'15%'}}>환승 {value.pathList.length}회 | ???? 원</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center', width:'90%'}}>
                                        {
                                            value.pathList.map((path) => {
                                                var width = 20
                                                let line = path.routeNm+"";
                                                return <SubwayBarImage width={width+'%'} time={value.time} 
                                                line={line.substring(0,1)} 
                                                color={this.state.color['1호선']}/>
                                        })}
                                    </View>

                                    <View style={{flexDirection: 'row', width: '90%'}}>
                                        <Text>{value.pathList[0].fname}</Text>
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
        width: '95%',
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

        alignItems: 'center',
        paddingTop: 10,
        marginVertical: 10
    }
})