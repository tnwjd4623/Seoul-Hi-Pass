import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default class LocationHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Location: '대전 유성구 덕명동'
        }
    }
    render() {
        return(
            <View style={styles.header}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name="location-searching" size={25} color={'#828282'}/>
                    <Text style={{fontSize: 15, color: '#828282'}}>{this.state.Location}</Text>
                </View> 
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
})