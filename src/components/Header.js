import React, { Component } from 'react'
import {View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableHighlight} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default class Header extends Component{
    render() {
        return(
                <SafeAreaView style={styles.header}>
                    <View style={{width:'90%'}}><Text style={styles.logo}>LOGO</Text></View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('My')}>
                        <MaterialCommunityIcons name={"account"} size={30} color="#465cdb"/>
                    </TouchableHighlight>
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#465cdb'
    }
})