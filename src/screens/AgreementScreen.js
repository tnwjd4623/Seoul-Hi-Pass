import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class AgreementScreen extends Component {
    render() {
        return(
            <View style={{backgroundColor:'#fff', height:'100%'}}>
                <Text style={styles.text}>서울패스 이용약관 동의 (필수)</Text>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={{color: '#000'}}>이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관</Text>
                    </ScrollView>
                </View>

                <Text style={styles.text}>개인정보 수집이용 동의 (필수)</Text>
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
        height: '42%',
        width: '90%',
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        width: '90%',
        color: '#000',
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    }
})