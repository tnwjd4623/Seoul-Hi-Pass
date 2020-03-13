import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView, TouchableHighlight, TextInput} from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'
import { FileSystem } from 'react-native-unimodules'

import SvgUri from 'react-native-svg-uri'
import { Divider } from 'react-native-paper'


const HighlighText = (str, query)=>{
    let hlTxt = new Array();
    let qLength = query.length;
    const makeArray = (index)=>{
        let fIndex =str.indexOf(query, index);
        if(fIndex<0) return;
        if(index==fIndex) {hlTxt.push(<Text style={[styles.listText,styles.highlight]}>{query}</Text>); fIndex+=qLength;}
        else  hlTxt.push(<Text style={[styles.listText,styles.highlight]}>{str.substring(index,fIndex)}</Text>);

        makeArray(fIndex);
    }

    makeArray(0);

    return hlTxt;
}

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

    renderView = (items ,query) => {
        return items.map( (item)=>
            <TouchableOpacity style={styles.listItem} 
            onPress={()=>this.setState({station: item.station_nm,code:item.fr_code}, this.check)}>
                <Text style={styles.listText}>{item.line_num} {item.station_nm}</Text>
                {/*<HighlighText str={items.station_nm} query={query}/>*/}
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        const {query} = this.state;
        const comp = (a, b) => a.trim() === b.trim();
        const stationList = this.findStation(query)

        this.props.navigation.setParams({
            stationSearchBar: (
                <View style={{flexDirection:'row', alignItems:"center", width:'100%',height:'100%', paddingHorizontal:16}}>
                    <TextInput style={styles.autocompleteContainer} onChangeText={text => this.setState({query:text})}  />
                </View>
            ),
            searchButton: (
                <SvgUri source={require('../../assets/btn/Search.svg')} width="24" height="24" underlayColor="none"/>
            )
        })
    }


    render() {
        const {query} = this.state;
        const items = this.findStation(query);
        return(
            <View style={{width: '100%', height:'100%', backgroundColor: '#fff'}}>
                <ScrollView style={{marginTop:16}}>
                    <View style={styles.list_container} id="rowList">
                        {this.renderView(items, query)}
                    </View>    
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    autocompleteContainer: {
        width:'100%',
        backgroundColor:'#fafafa',
        fontSize:14,
        paddingHorizontal:8,
        paddingVertical:6
      },
    input: {
        width: '100%',
        borderWidth:1,   
        
    },
    list_container: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems:'flex-start',
        marginHorizontal: 64
    },

    listItem: {
        justifyContent: 'center',
        width:'100%',
        flex:1,
        paddingVertical:6
    },
    listText: {
        fontSize: 14,
        color: '#828282',
        
    },
    normal: {color:'#828282'},
    highlight:{color:'#4666e5'}
})