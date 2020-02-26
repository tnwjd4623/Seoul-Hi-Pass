import React, { Component } from 'react'
import {View, StyleSheet, Text,TouchableHighlight, Image} from 'react-native'
import SubwayBarImage from '../components/SubwayBarImage'
import SubwayHorizonBar from '../components/SubwayHorizonBar'

export default class DetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            minute: 0,
            transfer: 0,
            color: [
                '#000', '#12047d', '#12b300'
            ]
        }
    }
    componentDidMount () {
        const item = this.props.navigation.getParam('item')
        const minute = this.props.navigation.getParam('minute')
        const transfer = this.props.navigation.getParam('transfer')
        console.log(item, minute, transfer);

        this.setState({item: item, minute: minute, transfer: transfer})
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row', height: '10%', alignItems: 'center', width:'90%'}}>
                    <Text style={{fontSize:30, fontWeight:'bold', marginTop: -10}}>{this.state.minute} </Text>
                    <Text style={{fontWeight:'bold'}}>분</Text>
                    <Text style={{fontWeight:'bold'}}> | {this.state.arrive} 도착</Text>
                </View>

                <Text style={{width:'90%', height:'5%'}}>환승 {this.state.transfer}회 | 1,250 원</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', width:'90%', marginBottom: 20}}>
                    {
                        this.state.item.map((value) => {
                            var width = 90/this.state.minute * value.minute
                            return <SubwayBarImage width={width+'%'} time={value.minute} line={value.line} 
                            color={this.state.color[value.line]}/>
                        })
                    }
                    
                </View>

                
                <View style={styles.horizon_Container}>
                    <View style={{flexDirection: 'row'}}>
                        <SubwayHorizonBar color={this.state.color[2]} end={false} height={120}/>
                        <View style={styles.station_container}>
                            <Text style={styles.title}>2호선 삼성역 승차</Text>
                            <Text style={styles.subtitle}>선릉역 방면</Text>
                            <Text style={styles.subtitle}>빠른 환승 9-4</Text>
                            
                            <Text style={styles.text}>2개 역 이동</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.horizon_Container}>
                    <View style={{flexDirection: 'row'}}>
                        <SubwayHorizonBar color={this.state.color[1]} end={true} height={120}/>
                        <View style={styles.station_container}>
                            <Text style={styles.title}>1호선 서울역 승차</Text>
                            <Text style={styles.subtitle}>호롤역 방면</Text>
                            <Text style={styles.subtitle}>빠른 하차 9-4</Text>
                            
                            <Text style={styles.text}>2개 역 이동</Text>
                        </View>
                    </View>
                </View>

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
    }
})