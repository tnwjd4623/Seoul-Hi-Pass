import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class Advertisement extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View style={{width: '100%', height: 50, position: 'absolute', bottom: 0, 
            backgroundColor: '#d9d9d9',alignItems: 'center', justifyContent: 'center'}}>
                <Text>광고 표시란 입니다</Text>
            </View>
        )
    }
}