import React, { Component } from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import StoreItemList from '../containers/StoreItemList'

export default class PreorderListscreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <ScrollView>
                        <StoreItemList navigation={this.props.navigation}/>
                </ScrollView>
            </>
        )
    }
}
const styles = StyleSheet.create({
    
})