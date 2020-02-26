import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import TmoneyComponent from '../components/TmoneyComponent'
import {RadioButton} from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler'

export default class ChargeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: 1,
        }
    }
    _option = value => {
        this.setState({val: value})
    }
    render() {
        return(
            <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
                <TmoneyComponent setting={false}/>

                <View style={styles.container}>
                    <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                        <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 1})}
                            status={this.state.val == 1 ? 'checked':'unchecked'} /><Text>10,000원</Text>
                    </View>
                    <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                        <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 3})}
                            status={this.state.val == 3 ? 'checked':'unchecked'} /><Text>30,000원</Text>
                    </View>
                    <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                        <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 5})}
                            status={this.state.val == 5 ? 'checked':'unchecked'} /><Text>50,000원</Text>
                    </View>


                    <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                        <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 0})}
                            status={this.state.val == 0 ? 'checked':'unchecked'} /><Text>직접 입력</Text>
                    </View>
                    {this.state.val == 0 ? <View>
                            <TextInput style={styles.input} placeholder={'직접 입력'}/>
                        </View> : <></>}
                </View>
                
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>결제하기</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center'
    },
    input: {
        borderBottomWidth: 0.5,
        borderColor: '#828282',
        width: 200,
        
    },
    btn: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'flex-start'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',

        width: '100%',
        height:0,
        alignSelf: 'flex-start',
        marginBottom: 5,

        borderTopColor: '#384ec9',
        borderTopWidth:45,
        
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        alignSelf:'flex-end',
        right: 0,

        textAlign: 'center',
        textAlignVertical: 'center',
    }
})