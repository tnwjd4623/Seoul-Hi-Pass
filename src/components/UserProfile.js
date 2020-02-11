import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "맛집정복"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <View>
                        <View style={styles.profile}></View>
                    </View> 
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.name}>{this.state.name}</Text> 
                            <Text style={styles.text}> 님</Text>
                        </View>
                        <Text style={styles.text}>오늘도 맛집을 찾아가볼까요?</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <View style={styles.subcontainer}>
                        <Text style={styles.text}>나의 주문</Text>
                        <Text style={styles.name}>79</Text>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.subcontainer}>
                        <Text style={styles.text}>나의 리뷰</Text>
                        <Text style={styles.name}>79</Text>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.subcontainer}>
                        <Text style={styles.text}>나의 맛집</Text>
                        <Text style={styles.name}>79</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        color: '#8c8c8c',
        fontSize: 17
    },
    text: {
        fontSize: 15,
        color: '#8c8c8c'
    },
    container: {
        width: '90%',
        height: 170,
        borderBottomWidth: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 5,
        borderColor: '#828282'
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 100/2,
        backgroundColor: '#d9d9d9',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        marginRight: 20
    },

    subcontainer: {
        height: 60,
        width: 70,
        marginRight: 15,
        alignItems: "center",
    },
    line: {
        height: 60,
        width: 1,
        borderLeftWidth: 1,
        borderColor: '#828282',
        marginRight: 6
    }
})