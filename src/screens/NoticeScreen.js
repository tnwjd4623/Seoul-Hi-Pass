import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SwitchToggle from 'react-native-switch-toggle'

export default class NoticeScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            alarm: false,
        }
    }
    alarmPress = () => {
        this.setState({alarm: !this.state.alarm})
        alert("알림이 설정되었습니다.")
    }
    render() {
        return(
            <>
                <View style={{flexDirection: 'row', alignSelf:'flex-end'}}>
                    <Text style={{fontSize: 20, alignSelf: 'center'}}>알림받기</Text>
                    <SwitchToggle switchOn={this.state.alarm} onPress={this.alarmPress}/>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>대전 시청역 카페카페</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>대전 시청역 카페카페</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>대전 시청역 카페카페</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>대전 시청역 카페카페</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>대전 시청역 카페카페</Text>
                        <Text style={styles.content}>공지사항입니다.</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.title}>대전 시청역 카페카페</Text>
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