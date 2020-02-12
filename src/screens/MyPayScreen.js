import React, { Component } from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import StoreItemList from '../containers/StoreItemList'

export default class MyPayScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                 <ScrollView>
                    <StoreItemList/>
                </ScrollView>
            </>
        )
    }
}