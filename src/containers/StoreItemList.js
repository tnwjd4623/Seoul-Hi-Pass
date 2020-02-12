import React, { Component } from 'react'
import StoreItem from '../components/StoreItem'
import {TouchableHighlight} from 'react-native'


export default class StoreItemList extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        
        return(
            <>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('StoreDetail')}>
                <StoreItem
                    source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                    title={"MACISSO PASTA"}
                    address={"대전 덕명동 111번지 1층"}/>
            </TouchableHighlight>

            <StoreItem
                source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                title={"MACISSO PASTA"}
                address={"대전 덕명동 111번지 1층"}/>

            <StoreItem
                source={{uri:"http://interiorssa.com/upimges/product/2020/200120/5e254633885c6.jpg"}}
                title={"MACISSO PASTA"}
                address={"대전 덕명동 111번지 1층"}/>
            </>
        )
    }
}