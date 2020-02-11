import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Navigator from './navigations/Navigator'

export default class AppContainer extends Component {
    render() {
        return (
            <Navigator/>
        )
    }
}