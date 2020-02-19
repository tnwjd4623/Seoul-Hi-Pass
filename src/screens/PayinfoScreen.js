import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {RadioButton} from 'react-native-paper'
import {FontAwesome} from '@expo/vector-icons'

export default class PayinfoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
           credit: true,
           phone: false,
           tmoney: false,
        }
    }
    _credit = () => {
        this.setState({credit: true, phone: false, tmoney: false})
    }
    _phone = () => {
        this.setState({credit: false, phone: true, tmoney: false})
    }
    _tmoney = () => {
        this.setState({credit: false, phone: false, tmoney: true})
    }
    render() {
        const credit = this.state.credit;
        const phone = this.state.phone;
        const tmoney = this.state.tmoney;
        return (
            <View style={{width: '100%', height: '100%', backgroundColor: '#fff', padding: 20}}>
                <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <RadioButton color={'#465cdb'}
                        status={credit ? 'checked':'unchecked'} onPress={this._credit}/><Text>신용카드</Text>
                </View>
                {this.state.credit && 
                    <View style={styles.creditcard_container}> 
                        <Text>카드 번호</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput style={styles.cardnumber_input}/>
                            <TextInput style={styles.cardnumber_input}/>
                            <TextInput style={styles.cardnumber_input}/>
                            <TextInput style={styles.cardnumber_input}/>
                            <FontAwesome name={'cc-visa'} size={30} color="#465cdb"/>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 10, height: 100, alignItems:'center'}}>
                            <View style={{width: '50%'}}>
                                <Text>유효 기간</Text>
                                <TextInput style={styles.short_input} placeholder={"MM / YY"}/>
                            </View>

                            <View style={{width: '50%'}}>
                                <Text>CVC</Text>
                                <TextInput style={styles.short_input} secureTextEntry={true}/>
                            </View>
                        </View>

                       <View style={{height:100}}>
                           <Text>비밀번호 앞 2자리</Text>
                           <TextInput style={styles.short_input} secureTextEntry={true}/>
                       </View>
                    </View>}

                <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <RadioButton color={'#465cdb'}
                        status={phone ? 'checked':'unchecked'} onPress={this._phone}/><Text>휴대폰 결제</Text>
                </View>

                {this.state.phone && 
                    <View> 
                        <Text>휴대폰 선택</Text>
                    </View>}

                
                <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <RadioButton color={'#465cdb'}
                        status={tmoney ? 'checked':'unchecked'} onPress={this._tmoney}/><Text>티머니 결제</Text>
                </View>

                {this.state.tmoney && 
                    <View> 
                        <Text>티머니 선택</Text>
                    </View>}
            </View>
        )
      }
    }
    const styles = StyleSheet.create({
      creditcard_container: {
          height: 250,
          width: '80%',
          alignSelf: 'center',
          marginTop: 10
      },
      cardnumber_input: {
          borderBottomWidth: 1,
          borderColor: '#828282',
          width: '20%',
          marginRight: 5
      },
      short_input: {
          borderBottomWidth: 1,
          borderColor: '#828282',
          width: 100
      }
    });