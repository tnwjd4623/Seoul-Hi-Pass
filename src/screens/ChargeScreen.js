import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import TmoneyComponent from '../components/TmoneyComponent'
import {RadioButton} from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler'

import BlueButton from '../components/BlueButton'

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
            <View style={styles.full_container}>
                <View style={styles.container}>
                    <TmoneyComponent setting={false}/>
                    <View style={[styles.option_container,]}>
                        <View style={styles.option}>
                            <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 1})}
                                status={this.state.val == 1 ? 'checked':'unchecked'} /><Text>10,000원</Text>
                        </View>
                        <View style={styles.option}>
                            <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 3})}
                                status={this.state.val == 3 ? 'checked':'unchecked'} /><Text>30,000원</Text>
                        </View>
                        <View style={styles.option}>
                            <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 5})}
                                status={this.state.val == 5 ? 'checked':'unchecked'} /><Text>50,000원</Text>
                        </View>


                        <View style={[styles.option]}>
                            <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: 0})}
                                status={this.state.val == 0 ? 'checked':'unchecked'} />
                            <Text>직접 입력  </Text>
                            {this.state.val == 0 ? <View style={{flexBasis:'100%'}}>
                                <TextInput style={styles.input} placeholder={'직접 입력'}/>
                            </View> : <></>}
                        </View>
                    </View>
                </View>
                
                <View style={styles.bottom_container}>
                    <View style={{marginHorizontal:24}}>
                        <View style={styles.option_container}>
                            <View style={styles.option}>
                                <RadioButton color={'#465cdb'} onPress={()=>this.setState({val: -1})}
                                status={this.state.val < 0 ? 'checked':'unchecked'} /><Text>자동충전</Text>
                                {this.state.val < 0 ? <View><Text>1,500원 이하 남을 경우 10,000 원 자동 충전합니다.</Text></View> : <></>}
                            </View>
                        </View>
                    </View>
                    <View style={styles.btn_wrapper}>
                        <BlueButton text='결제하기' />
                    </View>
                </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    full_container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-between'
    },

    container: {
        width:'100%',
        paddingHorizontal:24,
        alignSelf: 'center',
        paddingTop:12,
        backgroundColor:'#fff',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        marginBottom:5,
        
    },
    option_container:{
        marginHorizontal:16,
        marginVertical:'4%',
        flexDirection:'column',
        alignSelf:'flex-start',
        justifyContent:'space-between',
        flexGrow:1
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 0.5,
        borderColor: '#828282',
        width: 200,
        
    },
    btn_wrapper: {
        width: '100%',
        marginTop: 20,
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
    },
    bottom_container: {
        width:'100%',
        backgroundColor:'#fff',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        flex:1,
    }
})