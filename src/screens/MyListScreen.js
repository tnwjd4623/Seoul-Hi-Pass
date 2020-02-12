import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import StoreItemList from '../containers/StoreItemList'
import { ScrollView } from 'react-native-gesture-handler'

export default class MyListScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <View style={styles.header}>
                    <Text style={{fontSize: 17, color:'#828282'}}>나의 맛집</Text>
                </View>
                <ScrollView>
                    <StoreItemList navigation={this.props.navigation}/>
                </ScrollView>
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
    }
})