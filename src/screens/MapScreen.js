import React, { Component } from 'react'
import {View, Text} from 'react-native'


export default class MapScreen extends Component {
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