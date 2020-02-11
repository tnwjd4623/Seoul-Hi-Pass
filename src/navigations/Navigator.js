import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import screen_13 from "../screens/screen_13";
import screen_15 from '../screens/screen_15';
import OrderScreen from '../screens/OrderScreen';
import {createStackNavigator} from 'react-navigation-stack'
import PayScreen from '../screens/PayScreen';
import LoginScreen from '../screens/LoginScreen';
import JoinScreen from '../screens/JoinScreen';
import AgreementScreen from '../screens/AgreementScreen';

import HomeScreen from '../screens/HomeScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import FeatherIcon from '../components/FeatherIcon'
import MapScreen from '../screens/MapScreen';

const navigator1 = createStackNavigator(
    {
        screen13: {
            screen: screen_13,
            navigationOptions: {
                header: null,
            }
        },
        screen15: {
            screen: screen_15,
            navigationOptions: {
                headerTitleAlign: 'center'
            }
        },
        Order: {
            screen: OrderScreen,
            navigationOptions: {
                title: "주문하기",
                headerTitleAlign: 'center'
            }
        },
        Pay: {
            screen: PayScreen,
            navigationOptions: {
                title: "결제하기",
                headerTitleAlign: 'center'
            }
        }
    },
    {
        initialRouteName: 'screen13',
    }
)

const loginStack = createStackNavigator(
    {
        login:{
            screen:LoginScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        join: {
            screen: JoinScreen,
            navigationOptions: {
                title: "이메일로 회원가입하기",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 17,
                    color: '#828282'
                }
            }
        },
        agree: {
            screen: AgreementScreen,
            navigationOptions: {
                title: "이용약관",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 17,
                    color: '#828282'
                }
            }
        }
    },
    {
        initialRouteName: 'login'
    }
)

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
)

HomeStack.navigationOptions = ({navigation}) => {
    let tabBarVisible;
    if(navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            tabBarVisible = false;
        })
    }
    return {
        tabBarVisible
    }
}
const MainNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions:{
                tabBarLabel: "",
                tabBarIcon:({focused}) => (
                    <FeatherIcon name={"home"} focused={focused}/>
                ),
                
            }
        },
        Order: {
            screen: HomeScreen,
            navigationOptions:{
                tabBarLabel: "",
                tabBarIcon:({focused}) => (
                    <FeatherIcon name={"silverware-fork-knife"} focused={focused}/>
                ),
                
            }
    
        },
        Heart: {
            screen: HomeScreen,
            navigationOptions:{
                tabBarLabel: "",
                tabBarIcon:({focused}) => (
                    <FeatherIcon name={"heart"} focused={focused}/>
                ),
                
            }
  
        },
        Setting: {
            screen: HomeScreen,
            navigationOptions:{
                tabBarLabel: "",
                tabBarIcon:({focused}) => (
                    <FeatherIcon name={"settings"} focused={focused}/>
                ),
                
            }
 
         },
    },
    {
        tabBarOptions: {showLabel: false}
    }
)
const RootSwitch = createSwitchNavigator(
    {
        init:{
            screen: loginStack
        },
        navigator1:{
            screen: navigator1
        },
        Main: {
            screen: MainNavigator
        },
    }
)






export default createAppContainer(RootSwitch);
