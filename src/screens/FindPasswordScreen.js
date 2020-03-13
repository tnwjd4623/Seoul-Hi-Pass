import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput} from 'react-native'

import BlueButton from '../components/BlueButton'

import {DefaultInput} from '../components/InputBoxes'

export default class FindPasswordScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <View style={{height: '100%', width:'100%', backgroundColor: '#fff', alignItems:'center', 
                 justifyContent: 'center', flex:1}}>
                    <View style={{paddingHorizontal:40}}>
                        <DefaultInput text='이메일' placeholder="Seoulpass.com" onChangeText={this._inputEmail} />     
                    </View>
                    

                    <View style={styles.btn_container}>
                        <BlueButton text="확인 메일 보내기" onPress={()=>this.props.navigation.navigate('changePW')}/>
                    </View>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    btn_container: {
        width:'100%'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',

        width: '100%',
        height:0,
        alignSelf: 'flex-start',
        marginBottom: 5,

        borderTopColor: '#384ec9',
        borderTopWidth:45,
        
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        alignSelf:'flex-end',
        right: 0,

        textAlign: 'center',
        textAlignVertical: 'center',
    }
})