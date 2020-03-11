import {View, Text,TextInput, StyleSheet,TouchableOpacity,Image} from 'react-native'
import PropTypes from 'prop-types';
import React from 'react'


const DefaultInput = ({text, placeholder, onChangeText,onSubmitEditing, white, marginRight, marginBottom, blurOnSubmit, pw, ref, children}) => {
    let color_white;
    let placeholderTextColor = '#00000059';

    if(white){
        color_white=styles.color_white;
        placeholderTextColor = '#ffffff99';
    }

    return(
        <View style={[{marginRight:marginRight, marginBottom:marginBottom},color_white]}>
            <Text style={[styles.default_text,color_white]}>{text}</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput style={[styles.input,color_white]} placeholderTextColor={placeholderTextColor} placeholder={placeholder}
                onChangeText={onChangeText} onSubmitEditing ={onSubmitEditing} blurOnSubmit={blurOnSubmit} ref={ref} secureTextEntry={pw}/>
                {children}
            </View>
        </View>
    )
}


DefaultInput.propTypes = {
    text: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    ref: PropTypes.func,
    placeholder: PropTypes.string,
    white: PropTypes.bool,
    blurOnSubmit: PropTypes.bool,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    pw: PropTypes.bool
};
  
  DefaultInput.defaultProps = {
    text: "N/A",
    onChangeText: () => console.warn('onChangeText not defined'),
    onSubmitEditing: ()=>{},
    ref:()=>{} ,
    placeholder:"",
    white: false,
    blurOnSubmit: false,
    marginRight: 0,
    marginBottom: 24,
    pw: false
  };

const styles = StyleSheet.create({
    default_text: {
        color: '#000000dd',
        paddingLeft:8,
        marginBottom:10,
        fontWeight:'bold',
        fontSize:12
    },
    detail_text: {
        color: '#000000dd',
        fontWeight: 'bold',
        fontSize:10
    },
    input : {
        borderBottomWidth: 1,
        borderColor : '#00000059',
        paddingLeft: 10,
        paddingBottom:4,
        width:'100%',
        fontSize:14,

    },
    /*
    input_container: {
        marginBottom: 24,
    },
    */
    detail_input: {
        borderBottomWidth: 1,
        borderColor : '#00000059',
        paddingLeft: 10,
        marginBottom:8,
        paddingBottom:4,
        width:'100%',
        fontSize:14
    },
    detail_btn: {
        backgroundColor: '#f5f5f5',
        borderRadius: 7,
        marginLeft: 7,
        paddingHorizontal:12,
        paddingVertical:12,
        textAlignVertical:'bottom',
        alignSelf:'baseline',
        justifyContent:'center',
        borderRadius:20
    },
    color_white:{
        color: '#ffffffdd',
        borderColor: '#ffffff99'
    }
})

export {
    DefaultInput
}