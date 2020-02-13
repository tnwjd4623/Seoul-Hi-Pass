import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'


export default class PreorderScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <View style={styles.header}>
                    <Text style={{fontSize: 17, color:'#828282'}}>미리 주문하기</Text>
                </View>
                <View style={styles.ad_container}></View>

                <View style={styles.main_container}>
                    <TextInput style={styles.input} placeholder={"뭐가 먹고싶어?"}/> 
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
                        <TouchableOpacity style={styles.component} onPress={()=>this.props.navigation.navigate('PreOrderList')}>
                            <Text>한식</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.component}>
                            <Text>한식</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.component}>
                            <Text>한식</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.component}>
                            <Text>한식</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#ffffff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 50,
        height: 40,
        marginTop: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ad_container: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        height: '30%'
    },
    component: {
        width: 60,
        height: 60,
        borderRadius: 100/2,
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    }
})