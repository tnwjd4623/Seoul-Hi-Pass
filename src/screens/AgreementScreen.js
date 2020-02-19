import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class AgreementScreen extends Component {
    render() {
        return(
            <View style={{backgroundColor:'#fff', height:'100%'}}>
                <Text style={styles.text}>이용약관</Text>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={{color: '#000'}}>이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관</Text>
                    </ScrollView>
                </View>

                <Text style={styles.text}>이용약관</Text>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={{color: '#000'}}>이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관</Text>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: '45%',
        width: '90%',
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        borderRadius: 10
    },
    text: {
        width: '90%',
        color: '#808080',
        alignSelf: 'center',
        marginTop: 10
    }
})