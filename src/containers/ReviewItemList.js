import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'
import ReviewItem from '../components/ReviewItem'
import { ScrollView } from 'react-native-gesture-handler'


export default class ReviewItemList extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <ScrollView>
                <ReviewItem
                source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                profile={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                review={"사장님이 친절하고 맛있어요"}
                name={"홍길동"}/>

                <ReviewItem
                source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                profile={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                review={"사장님이 친절하고 맛있어요"}
                name={"홍길동"}/>

                <ReviewItem
                source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                profile={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                review={"사장님이 친절하고 맛있어요"}
                name={"홍길동"}/>

                <ReviewItem
                source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                profile={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                review={"사장님이 친절하고 맛있어요"}
                name={"홍길동"}/>
            </ScrollView>
        )
    }
}

