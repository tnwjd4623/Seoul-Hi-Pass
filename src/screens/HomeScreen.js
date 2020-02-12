import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native'
import LocationHeader from '../components/LocationHeader'
import UserProfile from '../components/UserProfile'
import {MaterialIcons} from '@expo/vector-icons'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: "대전 유성구 덕명동"
          };
    }

    render() {
        return(
            <>
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                    <TouchableHighlight style={{width: '85%', marginLeft: 20}} onPress={()=>this.props.navigation.navigate('Map', {location:this.state.location} )}>
                        <LocationHeader location={this.state.location} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('Search', {location:this.state.location})}>
                        <MaterialIcons name="search" size={28} color={"#828282"}/>
                    </TouchableHighlight>
                </View>

                <UserProfile/>

                <TouchableOpacity style={styles.pre_order}>
                    <View style={{width: '100%'}}>
                        <Text style={styles.pre_text}>미리 주문하기</Text>
                        <Text style={{color: '#666666'}}>시간이 밥이다</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.around_container}>
                    <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 10}}>
                        <Text>내 주변 인기 맛집</Text>
                    </View>

                    <View style={styles.line}></View>
                    <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 10, alignItems: 'center'}}>
                        <View style={styles.shop_photo}></View>
                        <View style={{width: '60%'}}>
                            <Text>상호명</Text>
                            <Text>주소</Text>
                        </View>
                        <View>
                            <Text>카테고리</Text>
                        </View>
                    </View>

                    <View style={styles.line}></View>
                    <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 10, alignItems: 'center'}}>
                        <View style={styles.shop_photo}></View>
                        <View style={{width: '60%'}}>
                            <Text>상호명</Text>
                            <Text>주소</Text>
                        </View>
                        <View>
                            <Text>카테고리</Text>
                        </View>
                    </View>

                    <View style={styles.line}></View>
                    <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 10, alignItems: 'center'}}>
                        <View style={styles.shop_photo}></View>
                        <View style={{width: '60%'}}>
                            <Text>상호명</Text>
                            <Text>주소</Text>
                        </View>
                        <View>
                            <Text>카테고리</Text>
                        </View>
                    </View>
                </View>

                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    pre_order: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        height: 80,
        marginTop: 20,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pre_text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#666666'
    },
    around_container: {
        width: '90%',
        alignSelf: 'center'
    },
    line: {
        height: 1,
        width: '95%',
        backgroundColor: 'gray',
        alignSelf: 'center',
        marginTop: 20,
    },
    shop_photo: {
        height: 60,
        width: 60,
        borderRadius: 15,
        backgroundColor: '#e0e0e0',
        marginRight: 20
    }
})