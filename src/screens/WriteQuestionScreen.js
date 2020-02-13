import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'

export default class WriteQuestionScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput style={styles.title}
                        placeholder={"제목"} placeholderTextColor={'#000'}/>

                    <ModalDropdown  style={styles.dropdown} dropdownTextStyle={styles.dropdown_text}
                        dropdownStyle={styles.dropdownStyle} textStyle={styles.dropdown_text}
                        options={['카테고리1']} defaultValue={'게시판'}/>

                    <TextInput style={styles.content} placeholder={"내용"} placeholderTextColor={'#000'}/>

                    <View style={styles.line}></View>
                    <Text style={styles.text}>사진 첨부</Text>
                </View>

                <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('WriteQuestion')}>
                    <Text>문의하기</Text>
                </TouchableOpacity>
            </>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        width: '90%',
        height: 40, 
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        paddingLeft: 10
    },
    dropdown: {
        backgroundColor: '#d9d9d9',
        width: '90%',
        height: 40,
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    dropdown_text: {

    },
    dropdownStyle: {
        width: '85%',
        
    },
    content: {
        height: '50%',
        backgroundColor: '#d9d9d9',
        width: '90%',
        marginTop: 10,
        borderRadius: 10,
        paddingLeft: 10
    },
    line: {
        backgroundColor: '#d9d9d9',
        height: 1,
        width: '90%',
        marginTop: 20
    },
    text: {
        width: '90%',
        fontSize: 17,
        color: '#828282',
        marginTop: 20
    },
    btn: {
        height: 80,
        width: '100%',
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
})