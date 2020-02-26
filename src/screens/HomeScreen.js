import React, { Component } from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableHighlight, Image, TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent';
import TmoneyComponent from '../components/TmoneyComponent';
import Map from '../components/Map'
import Autocomplete from 'react-native-autocomplete-input'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            pay:'tmoney',
            departure: '',
            destination: ''
          };
    }
    _swap = () => {
        const depart = this.state.depart;
        const arrive = this.state.arrive;

        this.setState({depart: arrive, arrive: depart})
    }
    _depart = text => {
        this.setState({departure: text})
    }
    _arrive = text => {
        this.setState({destination: text})
    }
 
    findStation(query) {
        if(query === '') {
            return[];
        }
        const data = ['강남', '홍대', '서울역', '서울울', '서울윅','삼성역']
        const regex = new RegExp(`${query.trim()}`);
        return data.filter(item => item.search(regex) >=0);
    }
    render() {
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        const depart_station = this.findStation(this.state.departure)
        const dest_station = this.findStation(this.state.destination)
        

        return(
            <View style={{paddingTop: StatusBar.currentHeight, backgroundColor: '#fff', height:'100%'}}>
                <Header navigation={this.props.navigation}/>
                {this.state.pay == 'credit' ? <CardComponent navigation={this.props.navigation}/> : <></>}
                {this.state.pay == 'tmoney'? <TmoneyComponent navigation={this.props.navigation} setting={true}/> : <></>}

                <View style={styles.search}>
                    <TouchableHighlight style={styles.swap} onPress={this._swap}>
                        <Image resizeMode="contain" source={require('../../assets/Change.png')} 
                            style={{width: '100%', height:'70%'}}/>
                    </TouchableHighlight>
                    <View style={{width: '70%', marginRight: 10}}>

                        <Autocomplete autoCapitalize="none" autoCorrect={false} inputContainerStyle={{borderWidth:0}}
                            value={this.state.departure}
                            containerStyle={styles.input} placeholder="출발역을 입력해주세요" placeholderTextColor="#000"
                            onChangeText={this._depart} listStyle={styles.list}
                            data={depart_station.length === 1 && comp(this.state.departure, depart_station[0]) ? [] : depart_station}
                            onSubmitEditing={()=>{this.secondTextInput.focus();}} blurOnSubmit={false}
                            renderItem={({ item, i }) => (
                                <TouchableOpacity style={styles.listItem} onPress={()=>this.setState({departure: item})}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}/>

                        <View style={styles.line}/>

                        <Autocomplete ref={(input) => {this.secondTextInput = input;}} autoCapitalize="none" 
                            autoCorrect={false} inputContainerStyle={{borderWidth:0}} value={this.state.destination}
                            containerStyle={styles.input} placeholder="도착역을 입력해주세요" placeholderTextColor="#000"
                            onChangeText={this._arrive} value={this.state.destination}  listStyle={styles.list}
                            data={dest_station.length === 1 && comp(this.state.destination, dest_station[0]) ? [] : dest_station}
                            renderItem={({ item, i }) => (
                                <TouchableOpacity style={styles.listItem} onPress={()=>this.setState({destination: item})}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}/>
                     
                    </View>
                    <TouchableHighlight style={styles.swap} onPress={()=>this.props.navigation.navigate('search', 
                        {depart:'xx역', arrive: 'yy역'})}>
                        <Image resizeMode="contain" source={require('../../assets/Search.png')} 
                            style={{width: '100%', height:'70%'}}/>
                    </TouchableHighlight>
                </View>

                <Map/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   search: {
        backgroundColor: '#fff',
        width: '80%',
        height:90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2, 
        marginTop:20,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
      
    },
    swap: {
        width:'10%'
    },
    line: {
        backgroundColor: '#e0e0e0',
        height: 1,
        width:'100%'
    },
    input: {
        width: '90%',
        marginLeft: 20,
        padding:0,
        borderWidth: 0,
       
    },
    list: {
        width:'90%',
        height: 52,
        position: 'relative',
        zIndex:2000,
        margin:0
    },
    listItem: {
        borderBottomWidth: 0.5,
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20
    },
    listText: {
        fontSize: 17,
        color: '#828282',
        
    }
})