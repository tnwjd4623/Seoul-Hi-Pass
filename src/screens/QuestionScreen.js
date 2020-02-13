import React, { Component } from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class QuestionScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>문의문의문의문의</Text>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.container}>
                        <Text style={styles.title}>문의문의문의문의</Text>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.container}>
                        <Text style={styles.title}>문의문의문의문의</Text>
                    </View>
                    <View style={styles.line}></View>
                </ScrollView>


                <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('WriteQuestion')}>
                    <Text>문의하기</Text>
                </TouchableOpacity>
            </>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        height: 80,
        width: '100%',
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    container: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        height: 60,
        marginTop: 20
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#828282'
    },
    line: {
        height: 1,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#828282'
    }
})