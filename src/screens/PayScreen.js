import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';


export default class PayScreen extends Component {
    constructor(props) {
        super(props);
    }
    _payment = () => {
        alert('결제 완료');
        this.props.navigation.popToTop();
    }
    render() {
        return (
            <>
            <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'column'}}>
                    <View style={{margin:20}}> 
                        <Text style={styles.default_Text}>구매 정보 확인</Text>
                    </View>

                    <View style={styles.shop_info}>
                    <View style={styles.shop_photo}></View>
                    <View style={{marginLeft: 10, paddingTop:20}}>
                        <Text style={styles.default_Text}>MACISSO PASTA</Text>
                        <Text style={styles.default_Text}>대전 덕명동 111번지 1층</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.menu}>알리오올리오</Text><Text style={styles.menu}>까르보나라</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.list}>
                    <View style={{flexDirection:'row'}}>
                       <View style={{width:'70%'}}>
                           <Text style={styles.default_Text}>setA * 2개</Text>
                        </View>
                        <Text style={styles.default_Text}>36,000</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                       <View style={{width:'70%'}}>
                           <Text style={styles.default_Text}>setA * 2개</Text>
                        </View>
                        <Text style={styles.default_Text}>36,000</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                       <View style={{width:'70%'}}>
                           <Text style={styles.default_Text}>setA * 2개</Text>
                        </View>
                        <Text style={styles.default_Text}>36,000</Text>
                    </View>
                </View>

                <View style={styles.line}></View>
                
                <View style={styles.payment}>
                    <Text style={styles.default_Text}>결제방법</Text>
                    <ModalDropdown  style={styles.dropdown} dropdownTextStyle={styles.dropdown_text}
                        dropdownStyle={styles.dropdownStyle} textStyle={styles.dropdown_text}
                        options={['신용카드']} defaultValue={'신용카드'}/>
                </View>

                <View style={styles.line}></View>
                <View style={styles.payment}>
                    <Text style={styles.default_Text}>결제금액{"\n"}</Text>
                    
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '80%'}}><Text style={styles.default_Text}>상품금액</Text></View>
                        <Text style={styles.default_Text}>00,000 원</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '80%'}}><Text style={styles.default_Text}>할인</Text></View>
                        <Text style={styles.default_Text}>00,000 원</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '80%'}}>
                            <Text style={styles.default_Text}>쿠폰</Text>
                            <ModalDropdown style={styles.coupon_container} defaultValue={"쿠폰선택"} 
                               dropdownStyle={styles.coupon_option} textStyle={{textAlign:'center'}}
                               dropdownTextStyle={{textAlign:'center'}} options={["할인쿠폰1"]}/>
                        </View>
                        <Text style={styles.default_Text}>00,000 원</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '80%'}}>
                            <Text style={styles.default_Text}>포인트</Text>
                            <ModalDropdown style={styles.coupon_container} defaultValue={"쿠폰선택"} 
                               dropdownStyle={styles.coupon_option} textStyle={{textAlign:'center'}}
                               dropdownTextStyle={{textAlign:'center'}} options={["할인쿠폰1"]}/>
                        </View>
                        <Text style={styles.default_Text}>00,000 원</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '80%'}}><Text style={styles.default_Text}>총 결제 금액</Text></View>
                        <Text style={styles.total_price}>00,000 원</Text>
                    </View>

                </View>
                
                <TouchableOpacity onPress={this._payment} style={styles.btn}>
                        <Text style={styles.default_Text}>결제완료</Text>
                </TouchableOpacity>
            </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    default_Text: {
        color: '#828282'
    },
    total_price: {
        color: '#828282',
        fontWeight: 'bold',
        fontSize: 17
    },
    shop_info: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center'
    },
    shop_photo: {
        backgroundColor: '#d9d9d9',
        width: 140,
        height: 100,
        borderRadius: 10
    },
    menu: {
        borderRadius: 5,
        backgroundColor: '#d9d9d9',
        color: '#828282',
        marginRight: 5,
        marginTop: 5,
        width: 100,
        textAlign: 'center'
    },
    list: {
        width: '100%',
        marginLeft: 24,
        marginTop: 20
    },
    line: {
        backgroundColor: '#d9d9d9',
        height: 1,
        width: '90%',
        margin: 10,
    },

    payment: {
        alignSelf: 'center',
        width: '90%'
    },
    dropdown: {
        width: '60%',
        height: 40,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        alignSelf: 'center',
        flex: 1,
        padding: 6
    },
    dropdown_text: {
        fontSize: 17,
        textAlign: 'center',
    },
    dropdownStyle: {
        width: '50%',
        alignSelf: 'center'
    },
    coupon_container: {
        backgroundColor: '#d9d9d9',
        width: '60%',
        height: 20,
        borderRadius: 5
    },
    coupon_option: {
        width: '55%',
        borderRadius: 5
    },
    btn: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        height: 60,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    }
})