import React,{Component} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialIcons'
import NaverLoginComponent from '../components/NaverLoginComponent'
import KakaoLoginComponent from '../components/KakaoLoginComponent'
import GoogleLoginComponent from '../components/GoogleLoginComponent'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            isModalVisible: false
        }
    }
    closeModal = () => {
        console.log("close");
        this.setState({isModalVisible: false});
    }
    openModal = () => {
        console.log("open");
        this.setState({isModalVisible: true});
    }
    login = () => {
        this.closeModal();
        this.props.navigation.navigate('Home');
    }
    findPW = () => {
        this.closeModal();
        this.props.navigation.navigate('findPW');
    }
    render() {
        return(
            <View style={styles.container}>

                <NaverLoginComponent/>

               <KakaoLoginComponent/>

                <GoogleLoginComponent/>

                <TouchableOpacity style={styles.email_btn} onPress={this.openModal}>
                    <Text style={styles.email_text}>이메일로 로그인</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.join} onPress={()=>this.props.navigation.navigate('join')}>
                    <Text style={styles.join_text}>이메일로 회원가입</Text>
                </TouchableOpacity>

                {/*--------- Modal ----------*/}
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modal_container}> 
                        <View style={{width: '100%', justifyContent:'flex-end', alignItems:'flex-end', 
                            position:'absolute', top:0}} >
                            <TouchableHighlight onPress={this.closeModal}>
                                <Icon name="close" size={30} color="gray"/>
                            </TouchableHighlight>
                        </View>
                        <View style={{width: 90, height:90, backgroundColor: '#ffffff', marginBottom: 20}}/>

                        <View style={styles.login_form}>
                            <TextInput style={styles.input} placeholder={"이메일 입력"} placeholderTextColor={'#999999'}/>
                            <TextInput style={styles.input} placeholder={"비밀번호"} placeholderTextColor={'#999999'} secureTextEntry={true}/>
                        </View>

                        <TouchableOpacity style={styles.login_btn} onPress={this.login}>
                            <Text style={styles.email_text}>로그인하기</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.findPW}>
                            <Text style={styles.find_pw}>비밀번호찾기</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flex: 1,
        justifyContent:'center',
        
    },
    email_btn: {
        width: 220,
        height: 40,
        backgroundColor: '#a1a1a1',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    email_text:{
        color: '#595959',
        fontWeight: 'bold'
    },
    join: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    join_text: {
        color: '#595959'
    },
    modal_container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cccccc',
        borderRadius: 10
    },
    login_form:{
        width: '65%'
    },
    input : {
        margin: 15,
        borderColor : '#828282',
        borderBottomWidth: 1,
        paddingLeft: 10,
        
    },
    login_btn: {
        width: 220,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        shadowColor: '#cccccc',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    find_pw: {
        borderBottomWidth: 1,
        marginTop: 10,
        color: '#828282',
        borderColor: '#818181'
    }
})