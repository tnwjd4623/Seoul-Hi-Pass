import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, CheckBox} from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Feather' 
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class screen_15 extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({navigation}) =>({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    });

    componentDidMount() {
        this.props.navigation;
    }
    render() {
        return(
            <>     
            <ScrollView>
                <View style={styles.menu_bar}><Text style={styles.default_Text}>세트 메뉴</Text></View>
                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                <View style={styles.menu_bar}><Text style={styles.default_Text}>단품 메뉴</Text></View>
                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                <View style={styles.menu_container}>
                    <CheckBox/>
                    <View style={styles.menu_photo}></View>
                    <View style={styles.menu_detail}>
                        <Text style={styles.default_Text}>메메뉴메뉴메뉴메뉴{"\n"}설명설명설명설명{"\n"}가격가격가격</Text>
                    </View>

                    <TouchableOpacity style={styles.count_btn}><Text>-</Text></TouchableOpacity>
                    <Text style={styles.number}>0</Text>
                    <TouchableOpacity style={styles.count_btn}><Text>+</Text></TouchableOpacity>
                </View>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Order')} style={styles.order_btn}>
                        <Text style={styles.default_Text}>주문담기</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    default_Text: {
        color: '#828282'
    },
    menu_container: {
        flexDirection: 'row',
        width: '100%',
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    menu_photo: {
        width: 60,
        height: 60,
        backgroundColor: '#d9d9d9',
        borderRadius: 10
    },
    menu_detail: {
        marginLeft: 10,
        width: '55%'
    },
    count_btn: {
        width: 20,
        height: 20,
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        marginRight: 2
    },
    number: {
        width: 20,
        height: 20,
        backgroundColor: '#d9d9d9',
        textAlign: 'center',
        marginRight: 2
    },
    menu_bar: {
        width: '100%',
        marginTop: 10,
        height: 40,
        padding: 10,
        backgroundColor: '#d9d9d9'
    },
    order_btn: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        height: 60,
        alignItems: 'center'
    }
})