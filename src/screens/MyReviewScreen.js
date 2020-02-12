import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ReviewItemList from '../containers/ReviewItemList'


export default class MyReviewScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <ReviewItemList/>
            </>
        )
    }
}
const styles = StyleSheet.create({
    
})