import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight} from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'


const stationData = require('../../assets/Seoul_SubwayList.json').DATA
export default class StationSearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            station: '',
            code: '',
            flag : false,
            query: '',
        };
    }
    findStation(query) {
        if(query === '') {
            return[];
        }
        
        const regex = new RegExp(`${query.trim()}`, 'i');
        return stationData.filter(item => item.station_nm.search(regex) >= 0 );
    }
    check = () => {
        this.props.navigation.state.params.goBackData({station:this.state.station, code:this.state.code})
        this.props.navigation.pop()
        
    }
    render() {
        const {query} = this.state;
        const comp = (a, b) => a.trim() === b.trim();
        const stationList = this.findStation(query)

        return(
            <View style={{width: '100%', height:'100%', backgroundColor: '#fff'}}>
                <View style={styles.input_container}>
                    <Autocomplete autoCapitalize="none" autoCorrect={false}
                                defaultValue={query} inputContainerStyle={styles.input} 
                                containerStyle={styles.autocompleteContainer} listContainerStyle={styles.list} 
                                listStyle={{borderWidth:0}}
                                placeholder="찾고자하는 역을 검색해주세요" placeholderTextColor="#000"
                                onChangeText={text => this.setState({query:text})} 
                                data={stationList.length === 1 && comp(query, stationList[0].station_nm) ? stationList : stationList}
                                renderItem={({ item, i }) => (
                                    <TouchableOpacity style={styles.listItem} 
                                        onPress={()=>this.setState({station: item.station_nm,code:item.fr_code}, this.check)}>
                                        <Text style={styles.listText}>{item.line_num} {item.station_nm}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item, index) => index.toString()}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input_container: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    autocompleteContainer: {
        zIndex:1,
        borderWidth:0,
        alignItems:'center',
        
      },
    input: {
        width: '70%',
        borderWidth:1,   
        height: 45,
        paddingLeft: 20,
        
    },
    list: {
        width:'100%',
        marginTop:50,
        height:'50%',
        borderWidth:0
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
        
    },
})