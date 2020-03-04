import React, { Component } from 'react'
import {View, ScrollView, Image, Animated} from 'react-native'

export default class Map extends Component{
    render() {
        return(
            <View style={{width: '100%', height: '50%', backgroundColor: '#e0e0e0', position:'absolute'
                ,bottom:0}}>
               <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <ScrollView horizontal>
                    <Animated.Image source={require('../../assets/img_subway.png')} resizeMode='cover'/>
                </ScrollView>
                </ScrollView>


            </View>
        )
    }
}