import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import StoreItemList from '../containers/StoreItemList';


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
            <>
            <View>
               <TextInput style={styles.input} placeholder={"어디서 뭐하지?"}/> 
            </View>

            <StoreItemList navigation={this.props.navigation} />
            </>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 50,
        height: 40,
        marginTop: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})