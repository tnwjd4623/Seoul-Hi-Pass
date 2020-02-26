import React, { Component } from 'react'
import {View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableHighlight, Image} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default class Header extends Component{
    render() {
        return(
                <SafeAreaView style={styles.header}>
                    <View style={{width:'90%'}}>
                        <Image resizeMode="contain" source={require('../../assets/Logo_2.png')}
                            style={{width: '100%', height: '60%', marginLeft: '-10%'}}/>
                    </View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('My')}>
                        <MaterialCommunityIcons name={"account"} size={40} color="#465cdb"/>
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
        paddingRight: 10
    },
})