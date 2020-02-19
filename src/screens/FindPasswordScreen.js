import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput} from 'react-native'

export default class FindPasswordScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <View style={{paddingTop: StatusBar.currentHeight, height: '100%', backgroundColor: '#fff', 
                    alignItems:'center', paddingTop: 100}}>
                    <Text style={{width:'70%'}}>이메일</Text>
                    <TextInput placeholder="이메일 입력" style={{borderBottomColor: "#828282", borderBottomWidth:1, width:'70%'}}/>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('changePW')}>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>확인 메일 보내기</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#465cdb',
        width: '70%',
        height:45,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})