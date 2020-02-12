import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'


export default class LocationSearchScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) =>({
        title: `${navigation.state.params.location}`,
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    });
    componentDidMount() {
        this.props.navigation
    }
    render() {
        return(
            <View><Text>지도 표시란</Text></View>
        )
    }
}