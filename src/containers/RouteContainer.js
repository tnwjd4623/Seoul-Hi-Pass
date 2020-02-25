import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native'


export default class RouteContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row', height: '30%', alignItems: 'center', width:'90%'}}>
                    <Text style={{fontSize:30, fontWeight:'bold', marginTop: -10}}>4 </Text>
                    <Text style={{fontWeight:'bold'}}>분</Text>
                    <Text style={{fontWeight:'bold'}}> | 09:52 도착</Text>
                    <TouchableHighlight style={{position:'absolute', right:0}}>
                        <AntDesign name={'right'} size={25} color={'#384ec9'}/>
                    </TouchableHighlight>
                </View>

                <Text style={{width:'90%', height:'15%'}}>환승 0회 | 1,250 원</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', width:'90%'}}>
                    <SubwayBarImage width={'45%'} time={4} line={2} color={'#12b300'}/>
                    <SubwayBarImage width={'45%'} time={4} line={1} color={'#0044d6'}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'center',
        height: 180,
        borderBottomWidth: 0,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.00,

        elevation: 1,

        alignItems: 'center',
        paddingTop: 10
    }
})