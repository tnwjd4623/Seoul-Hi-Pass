import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ScrollView} from 'react-native'
import {RadioButton} from 'react-native-paper'

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
            <KeyboardAvoidingView behavior="padding">
            <ScrollView contentContainerStyle={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', height: '100%', backgroundColor: '#fff', padding: 20}}>
                <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <RadioButton color={'#465cdb'}
                        status={credit ? 'checked':'unchecked'} onPress={this._credit}/>
                    <Text style={{fontWeight:'bold'}}>카카오 페이</Text>
                </View>

           {/*     <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <RadioButton color={'#465cdb'}
                        status={credit ? 'checked':'unchecked'} onPress={this._credit}/>
                    <Text style={{fontWeight:'bold'}}>신용카드</Text>
                    </View>
                    {this.state.credit && 
                    <View style={styles.creditcard_container}> 
                        <Text style={{fontWeight: 'bold'}}>카드 번호</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput style={styles.cardnumber_input} keyboardType={'numeric'} maxLength={4} 
                            onSubmitEditing ={()=>this.secondTextInput.focus()}/>

                            <TextInput style={styles.cardnumber_input} keyboardType={'numeric'} maxLength={4} 
                            onSubmitEditing ={()=>this.ThirdTextInput.focus()}
                            ref={(input)=>{this.secondTextInput = input}}/>

                            <TextInput style={styles.cardnumber_input} keyboardType={'numeric'} maxLength={4} 
                            onSubmitEditing ={()=>this.ForthTextInput.focus()}
                            ref={(input)=>{this.ThirdTextInput = input}}/>

                            <TextInput style={styles.cardnumber_input} keyboardType={'numeric'} maxLength={4}
                            onSubmitEditing ={()=>this.FifthTextInput.focus()}
                            ref={(input)=>{this.ForthTextInput = input}}/>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 10, height: 100, alignItems:'center'}}>
                            <View style={{width: '50%'}}>
                                <Text style={{fontWeight:'bold'}}>유효 기간</Text>
                                <TextInput style={styles.short_input} placeholder={"MM / YY"} keyboardType={'numeric'}
                                maxLength={4}/>
                            </View>

                            <View style={{width: '50%'}}>
                                <Text style={{fontWeight:'bold'}}>CVC</Text>
                                <TextInput style={styles.short_input} secureTextEntry={true} keyboardType={'numeric'}
                                maxLength={3}/>
                            </View>
                        </View>

                       <View style={{height:100}}>
                           <Text style={{fontWeight:'bold'}}>비밀번호 앞 2자리</Text>
                           <TextInput style={styles.short_input} secureTextEntry={true} keyboardType={'numeric'}
                           maxLength={2}/>
                       </View>

                    </View>}
           */}
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        )
      }
    }
    const styles = StyleSheet.create({
      creditcard_container: {
          height: 280,
          width: '80%',
          alignSelf: 'center',
          marginTop: 10,
 
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