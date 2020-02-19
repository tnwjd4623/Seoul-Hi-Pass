import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'


export default class ChangepasswordScreen extends Component {
    constructor(props) {
        super(props)
    }
    changePW = () => {
        Alert.alert(
            '비밀번호가 변경되었습니다. ',
            '',
            [
                {
                    text: '확인',
                    onPress: ()=> this.props.navigation.popToTop(),
                },
    
            ],
            {cancelable: false}
        )
    }
    render() {
        return(
            <View style={{height: '100%', backgroundColor: '#fff', alignItems: 'center', paddingTop: 30}}>
                
                <Text style={{width:'90%'}}>임시비밀번호</Text>
                <TextInput style={styles.input} placeholder="임시 비밀번호" secureTextEntry={true}/>

                <Text style={{width:'90%'}}>새 비밀번호 (8자리 이상)</Text>
                <TextInput style={styles.input}  secureTextEntry={true}/>

                <Text style={{width:'90%'}}>비밀번호 확인</Text>
                <TextInput style={styles.input}  secureTextEntry={true}/>

                <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 30}} onPress={this.changePW}>
                    <Text style={{color: '#465cbd', fontSize: 18, fontWeight: 'bold'}}>저장</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        width: '90%',
        borderBottomWidth: 1,
        borderColor: '#828282',
        marginBottom: 50
    }
})