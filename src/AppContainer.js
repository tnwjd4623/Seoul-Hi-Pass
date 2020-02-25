import 'react-native-gesture-handler'
import React, { Component } from 'react';
import Navigator from './navigations/Navigator'

export default class AppContainer extends Component {
    render() {
        return (
            <Navigator/>
        )
    }
}