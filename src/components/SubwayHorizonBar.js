import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'


export default class SubwayHorizonBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.color,
            end: this.props.end,
            height: this.props.height,
        }
    }
    renderElement = () => {
        if(this.state.end == true) {
            return(
                <View style={{backgroundColor: this.state.color, width:15, height:15, borderRadius: 50, marginTop:-2}}></View>
            )
        }
    }
    render() {
        return(
            <>
                <View style={{width:15, alignItems:'center', justifyContent: 'center'}}>
                    <View style={{backgroundColor: this.state.color, width:15, height:15, borderRadius: 50}}></View>
                    <View style={{backgroundColor: this.state.color, width: 2.5, height:this.state.height, marginTop: -2}}></View>
                    {this.renderElement()}
                </View>
            </>
        )
    }
}