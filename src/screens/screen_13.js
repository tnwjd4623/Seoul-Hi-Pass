import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, CheckBox} from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Feather' 
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class screen_13 extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name:"MACISSO PASTA"
        }
    }
    render() {
        return (
            <>
            <ScrollView>
                <View style={styles.container}></View>

                <View style={styles.header}>
                    <View style={{flexDirection: 'row', width:'100%', flex:1}}>
                        <View style={{width:'80%'}}>
                            <Text style={styles.title}>MACISSO PASTA</Text>
                            <Text style={styles.address}>대전 덕명동 111번지 1층</Text>
                        </View>

                        <Icon name="share" size={25} color="gray" />
                        <Icon name="heart" size={25} color="gray"/>

                        <View>
                            <Icon name="search" size={25} color="gray"/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.menu}>알리오올리오</Text>
                        <Text style={styles.menu}>까르보나라</Text>
                    </View>
                </View>
                
                <View style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.intro}>
                        <View style={{height: 80}}>
                            <Text style={styles.intro_text}>소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글</Text>
                        </View>

                        <Text style={styles.intro_phone}>070-000-0000</Text>
                    </View>

                    <View style={styles.photo_container}>
                        <Text style={styles.default_Text}>사진</Text>

                        <View style={{flexDirection:'row'}}>
                            <View style={styles.photo}></View><View style={styles.photo}></View>
                            <View style={styles.photo}></View><View style={styles.photo}></View>
                            <View style={styles.photo}></View>
                        </View>
                    </View>

                    <View style={styles.review_container}>
                        <View style={{flexDirection:'row', width: '100%', flex:1}}>
                            <Text style={styles.default_Text}>이용 후기</Text>
                            <Text style={{flex:1, textAlign: 'right', marginRight: 35}}>리뷰 더보기</Text>
                        </View>

                        <View style={{flexDirection:'row', marginTop: 10}}>
                            <View style={{marginRight: 50}}>
                                <Text style={{fontSize: 15, color: '#828282'}}>평점 4.0</Text>
                            </View>

                            <View style={{marginRight: 30,}}>
                                <Text style={{fontSize: 15, color: '#828282'}}>        맛 ㅁㅁㅁㅁㅁ</Text>
                                <Text style={{fontSize: 15, color: '#828282'}}>비주얼 ㅁㅁㅁㅁㅁ</Text>
                            </View>

                            <View >
                                <Text style={{fontSize: 15, color: '#828282'}}>청결 ㅁㅁㅁㅁㅁ</Text>
                                <Text style={{fontSize: 15, color: '#828282'}}>친절 ㅁㅁㅁㅁㅁ</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.review_container}>
                        <View style={{flexDirection:'row', marginTop: 10}}>
                            <View style={styles.logo}></View><View style={styles.review}></View>
                        </View>

                        <View style={{flexDirection:'row', marginTop: 10}}>
                            <View style={styles.logo}></View><View style={styles.review}></View>
                        </View>

                        <View style={{flexDirection:'row', marginTop: 10}}>
                            <View style={styles.logo}></View><View style={styles.review}></View>
                        </View>
                    </View>

                    <View style={styles.review_container}>
                        <Text style={styles.default_Text}>운영시간 / 휴무</Text>
                        <View style={styles.operating}></View>
                    </View>

                    <View style={styles.review_container}>
                        <Text style={styles.default_Text}>찾아 오시는 길</Text>
                        <View style={styles.map}></View>
                    </View>

                
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("screen15", {title:this.state.name})} style={styles.view_menu}>
                        <Text style={styles.default_Text}>메뉴보기</Text>
                    </TouchableOpacity>
                </View>
               
                </ScrollView>
            </>
        )
    }
}


const styles = StyleSheet.create( {
    default_Text: {
        color: '#828282'
    },
    container: {
        width: '100%',
        height: 200,
        backgroundColor: '#d9d9d9',

    },
    header: {
        paddingLeft: 20,
        backgroundColor: '#ffffff',
        paddingTop: 10,
        width: '100%',
    },
    title: {
        fontSize: 20,
        color: '#828282',
    },
    address: {
        color: '#828282'
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
    intro: {
        backgroundColor: '#d9d9d9',
        borderRadius: 15,
        margin: 20,
        width: '90%',
        height: 120,
        padding: 15
    },
    intro_text: {
        textAlignVertical: 'center',
        color: '#828282',
    },
    intro_phone: {
        
        color: '#828282'
    },
    photo_container: {
        paddingLeft: 20
    },
    photo: {
        backgroundColor: '#d9d9d9',
        width: 60,
        height: 60,
        marginTop: 10,
        marginRight: 10,
        borderRadius: 10

    },
    review_container: {
        paddingLeft: 20,
        marginTop: 20
    },
    review: {
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        height: 60,
        width: '72%'
    },
    logo: {
        backgroundColor: '#d9d9d9',
        height:60,
        width:60,
        borderRadius: 10,
        marginRight: 10,
    },
    operating: {
        width: '90%',
        height: 60,
        backgroundColor: '#d9d9d9',
        marginTop: 5,
        borderRadius: 10,

    },
    map: {
        width: '90%',
        height: 150,
        backgroundColor: '#d9d9d9',
        marginTop: 5,
        borderRadius: 10,
        marginBottom: 10
    },
    view_menu: {
        width: '100%',
        height: 60,
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        marginTop: 10
    },
   
   
})