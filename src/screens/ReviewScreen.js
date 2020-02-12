import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import ReviewItemList from '../containers/ReviewItemList'

export default class ReviewScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <ReviewItemList/>

                <TouchableOpacity style={styles.review_btn} onPress={()=>this.props.navigation.navigate('ReviewWrite')}>
                    <Text style={styles.text}>리뷰 작성하기</Text>
                </TouchableOpacity>
            </>
        )
    }
}

const styles = StyleSheet.create({
    review_btn: {
        backgroundColor: '#d9d9d9',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#8a8a8a'
    }
})