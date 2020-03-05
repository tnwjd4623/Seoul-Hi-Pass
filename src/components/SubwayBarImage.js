import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'


export default class SubwayBarImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.props.time,
            line: this.props.line,
            width: this.props.width,
            color: this.props.color
        }
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if(newProps.time != null) {
            this.setState({time: newProps.time})
        }
        if(newProps.width != null) {
            this.setState({width: newProps.width})
        }
    }

    render() {
        return(
            <>
                <View style={{flexDirection:'row', height: 25, alignItems: 'center', width: this.state.width}}>
                    <View style={{width:25,
                                    height:25,
                                    borderRadius: 100/2,
                                    backgroundColor: this.props.color,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: '#fff'}}>{this.state.line}</Text>
                    </View>
                    <View style={{width: '100%', height: 20, marginLeft: -4, alignItems: 'center'}}>
                        <Text style={{color: '#fff', width: '100%', textAlign: 'center',
                        borderTopWidth: 20, borderTopColor: this.props.color, 
                        borderRightWidth: 10, borderRightColor: 'transparent'}}>{this.state.time}분</Text>
                    </View>
                </View>
            </>
        )
    }
}
