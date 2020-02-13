import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import Modal from 'react-native-modal'

export default class screen_16 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false
        }
    }

    render() {
        return(
            <>
            <ScrollView>
               <View style={{margin:20}}> 
                <Text style={styles.default_Text}>구매 정보 확인</Text>
               </View>

            {/*주문 모달 창*/}
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modal}>

                        <View style={styles.modal_content}>
                            <Text style={styles.orderTitle}>주문 내역 확인</Text>
                            <View style={styles.line}></View>

                            <View style={styles.modal_alarm}>
                                <Text style={styles.modal_alarmText}>알림</Text>
                                <Text style={styles.modal_alarmText}>
                                    매장에 도착하셨나요?{"\n"}주문하신 음식을 결제해주세요!{"\n"}
                                    결제완료 후에 음식 준비가 시작됩니다.{"\n"}잠시만 기다려주세요.
                                </Text>
                            </View>

                            <View style={styles.modal_order}>
                                <View style={{flexDirection: 'row', width: '87%', height: '40%'}}>
                                    <View style={styles.modal_image}></View>
                                    <View style={{height: '80%', flex:1, alignSelf: 'center'}}>
                                        <Text style={styles.modal_orderTitle}>MACISSO PASTA</Text>
                                        <Text style={styles.modal_orderText}>대전 덕명동 584번지 5층</Text>
                                    </View>
                                </View>
                                {/*주문 정보*/}
                                <View style={styles.list}>
                                    <View style={{flexDirection:'row', width: '90%', alignSelf: 'center'}}>
                                    <View style={{width:'70%'}}>
                                        <Text style={styles.default_Text}>setA * 2개</Text>
                                        </View>
                                        <Text style={styles.default_Text}>36,000</Text>
                                    </View>

                                    <View style={{flexDirection:'row', width: '90%', alignSelf: 'center'}}>
                                    <View style={{width:'70%'}}>
                                        <Text style={styles.default_Text}>크림 리조또 * 2개</Text>
                                        </View>
                                        <Text style={styles.default_Text}>36,000</Text>
                                    </View>

                                    <View style={{flexDirection:'row', width: '90%', alignSelf: 'center'}}>
                                    <View style={{width:'70%'}}>
                                        <Text style={styles.default_Text}>setA * 2개</Text>
                                        </View>
                                        <Text style={styles.default_Text}>36,000</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>

                                <View style={{width: '87%'}}>
                                    <Text style={styles.default_Text}>수령 방법</Text>
                                    <Text style={styles.default_Text}>매장에서 식사</Text>
                                </View>
                                <View style={styles.line}></View>

                                <View style={{width: '87%'}}>
                                    <Text style={styles.default_Text}>요청 메세지</Text>
                                    <Text style={styles.default_Text}>오이 빼주세요</Text>
                                </View>

                            </View>


                        </View>
                    
                        <View style={{flexDirection: 'row', width: '100%', height: '13%'}}>
                            <TouchableOpacity style={styles.modal_btn} onPress={this.Paying}>
                                <Text style={styles.btn_text}>결제하기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modal_btn2} onPress={this.toggle_Modal}>
                                <Text style={styles.btn_text}>잠시대기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            {/* ------------------------------------------------------------------------------------------- */}




            {/*구매정보*/}
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
                </View>

                <View style={{width: '90%',alignSelf:'center', height: 2, backgroundColor: '#d9d9d9',marginTop:20 }}></View>
                <View style={styles.list}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'70%'}}>
                            <Text style={styles.default_Text}>setA * 2개</Text>
                            </View>
                            <Text style={styles.default_Text}>36,000</Text>
                    </View>
                </View>

                <View style={{width: '90%',alignSelf:'center', height: 2, backgroundColor: '#d9d9d9',marginTop:20}}></View>
                <View style={styles.list}>
                    <Text style={styles.default_Text}>수령 방법</Text>
                    <View style={styles.type}>
                        <Text style={styles.default_Text}>매장에서 식사</Text>
                    </View>
                </View>

                <View style={{width: '90%',alignSelf:'center', height: 2, backgroundColor: '#d9d9d9',marginTop:20 }}></View>
                <View style={styles.list}>
                    <Text style={styles.default_Text}>요청 메세지</Text>
                    <TextInput style={styles.request} placeholder={"요청 메세지"}/>
                </View>

                <TouchableOpacity onPress={()=>this.setState({isModalVisible: true})} style={styles.order_btn}>
                        <Text style={styles.default_Text}>주문하기</Text>
                </TouchableOpacity>

            </ScrollView>
            </>
        )
    }
    toggle_Modal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible})
    }

    Paying = () => {
        this.toggle_Modal();
        this.props.navigation.navigate('Pay');
    }
}

const styles = StyleSheet.create({
    default_Text: {
        color: '#828282'
    },
    shop_info: {
        flexDirection: 'row',
        width: '100%',
        marginLeft: 20
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
    order_btn: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        height: 60,
        alignItems: 'center',
    },
    type: {
        backgroundColor: '#d9d9d9',
        width:'80%',
        alignSelf:'center',
        alignItems: 'center',
        height: 40
    },
    request: {
        backgroundColor: '#d9d9d9',
        width:'80%',
        alignSelf:'center',
        alignItems: 'center',
        height: 100,
        marginBottom: 20
    },
    modal: {
        backgroundColor: '#e6e6e6',
        height: '95%', width: '90%', alignSelf: 'center',
        borderRadius: 20,

    },
    modal_content: {
        height: '87%',
        alignItems: 'center'
    },
    modal_btn: {
        backgroundColor: '#999999',
        width: '50%',
        alignItems: 'center',
        height: '100%',
        borderBottomLeftRadius: 20,
        
    },
    modal_btn2: {
        backgroundColor: '#d6d6d6',
        width: '50%',
        alignItems: 'center',
        height: '100%',
        borderBottomRightRadius: 20
  ,  },
  btn_text: {
      textAlignVertical: 'center',
      fontSize: 20,
      color: '#696969',
      flex: 1
  },
  line: {
      backgroundColor: '#999999',
      height: 1,
      width: '90%',
      margin: 10,
  },
  orderTitle: {
      fontSize: 18,
      color: '#454545',
      textAlign: 'center',
      marginTop: 10
  },
  modal_alarm: {
      width: '87%',
      height: '25%',
      backgroundColor: '#a19f9f',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      padding: 10
  },
  modal_alarmText: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10
  },
  modal_order: {
      width: '100%',
      height: '35%',
      marginTop: 15,
      alignItems: 'center',
  },
  modal_image: {
      backgroundColor: '#ffffff',
      width: '40%',
      height: '100%',
      borderRadius: 10,
      marginRight: 10
  },
  modal_orderTitle: {
      color: '#595959',
      fontSize: 17,
      
  },
  modal_orderText: {
      color: '#737373',
  }
})