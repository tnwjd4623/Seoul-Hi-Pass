import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import screen_13 from "../screens/screen_13";
import screen_15 from '../screens/screen_15';
import OrderScreen from '../screens/OrderScreen';
import {createStackNavigator} from 'react-navigation-stack'
import PayScreen from '../screens/PayScreen';
import LoginScreen from '../screens/LoginScreen';
import JoinScreen from '../screens/JoinScreen';

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
                header: null,
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
    },
    {
        initialRouteName: 'login'
    }
)

const RootSwitch = createSwitchNavigator(
    {
        init:{
            screen: loginStack
        },
        navigator1:{
            screen: navigator1
        }
    }
)






export default createAppContainer(RootSwitch);
