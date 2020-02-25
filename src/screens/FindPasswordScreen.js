import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput} from 'react-native'

export default class FindPasswordScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <View style={{height: '100%', backgroundColor: '#fff', alignItems:'center', 
                 justifyContent: 'center', flex:1}}>
                    <Text style={{width:'70%'}}>이메일</Text>
                    <TextInput placeholder="이메일 입력" style={{borderBottomColor: "#828282", borderBottomWidth:1, width:'70%'}}/>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('changePW')}>
                        <Text style={styles.text}>확인 메일 보내기</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'flex-start'
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