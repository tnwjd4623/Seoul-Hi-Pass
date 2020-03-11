import React, { Component } from 'react'
import {View, ScrollView, Image} from 'react-native'
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class Map extends Component{
    render() {
        return(
            <View style={{width: '100%', height: '50%', backgroundColor: '#fff', position:'absolute' , overflow: 'hidden'
                ,bottom:0, zIndex: -1}}>
               
                <PinchZoomView minScale={1} >
                    <Image source={require('../../assets/img_subway.png')} resizeMode='cover' 
                    style={{width: '100%', height: '100%'}}/>
                </PinchZoomView>


            </View>
        )
    }
}