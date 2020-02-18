import React, { Component } from 'react'
import {Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';


export default class GoogleLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pushData: [],
            loggedIn: false,
            userInfo: {email: '', name: '', type:''}
        }
    }
    componentDidMount() {
       
    }
    _signIn = async() => {
        GoogleSignin.configure({
            webClientId: '420490957468-fg53nft8vmu1egq8d37ralre73liiarb.apps.googleusercontent.com',
            offlineAccess: true,
            hostedDomain: '',
            forceConsentPrompt: true,

        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({userInfo: {email: userInfo.user.email, name: userInfo.user.name, type:'google'}, loggedIn: true}, function() {
                console.log(this.state.userInfo);
            })
            
        } catch(error) {
            if(error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("login Cancelled");
            }
            else if(error.code === statusCodes.IN_PROGRESS) {
                console.log("in progress error")
            }
            else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("play service not available")
            }
            else {
                console.log(error)
            }
        }
    }

    signOut = async() => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({user: null, loggedIn: false});
        }catch (error) {
            console.log(error);
        }
    }
    renderSignInButton() {
        return (
            <GoogleSigninButton style={{width: 220, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.loggedIn}/>
        )
    }
    
    render() {
        return(
            <>
                {!this.state.loggedIn && <GoogleSigninButton style={{width: 220, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.loggedIn}/>}
            </>
        )
    }
}