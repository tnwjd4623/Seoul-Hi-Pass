import React, { Component } from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'

export default class FAQScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>FAQ</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>FAQ</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>FAQ</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>FAQ</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>FAQ</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>FAQ</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>
                </ScrollView>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '87%',
        height: 100,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        color: '#828282',
        fontSize: 17
    }
})