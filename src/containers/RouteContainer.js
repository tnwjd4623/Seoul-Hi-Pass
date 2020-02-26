import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import SubwayBarImage from '../components/SubwayBarImage'

export default class RouteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrive: this.props.arrive,
            transfer: this.props.transfer,
            item: this.props.item,
            minute: this.props.minute,
            color: [
                '#000', '#12047d', '#12b300'
            ]
        }
    }
    componentDidMount () {
       
    }
    detail = () => {
        this.props.navigation.navigate('Detail', {item: this.state.item, transfer: this.state.transfer, minute: this.state.minute})
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row', height: '30%', alignItems: 'center', width:'90%'}}>
                    <Text style={{fontSize:30, fontWeight:'bold', marginTop: -10}}>{this.state.minute} </Text>
                    <Text style={{fontWeight:'bold'}}>분</Text>
                    <Text style={{fontWeight:'bold'}}> | {this.state.arrive} 도착</Text>
                    <TouchableHighlight onPress={this.detail} style={{position:'absolute', right:0, width: '10%', height:'50%'}}>
                        <Image resizeMode="contain" source={require('../../assets/Right_B.png')}
                            style={{width: '100%', height:'100%'}}/>
                    </TouchableHighlight>
                </View>

                <Text style={{width:'90%', height:'15%'}}>환승 {this.state.transfer}회 | 1,250 원</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', width:'90%'}}>
                    {
                        this.state.item.map((value) => {
                            var width = 90/this.state.minute * value.minute
                            return <SubwayBarImage width={width+'%'} time={value.minute} line={value.line} 
                            color={this.state.color[value.line]}/>
                        })
                    }
                    
                </View>

                <View style={{flexDirection: 'row', width: '90%'}}>
                    <Text>삼성역</Text>
                </View>

            </View>
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