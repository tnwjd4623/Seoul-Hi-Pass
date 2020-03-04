import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen';
import JoinScreen from '../screens/JoinScreen';
import AgreementScreen from '../screens/AgreementScreen';

import HomeScreen from '../screens/HomeScreen'
import MyPageScreen from '../screens/MyPageScreen';
import FindPasswordScreen from '../screens/FindPasswordScreen';
import ChangepasswordScreen from '../screens/ChangepasswordScreen';
import EmailLoginScreen from '../screens/EmailLoginScreen';
import PayinfoScreen from '../screens/PayinfoScreen';
import SearchScreen from '../screens/SearchScreen';
import ChargeScreen from '../screens/ChargeScreen';
import DetailScreen from '../screens/DetailScreen';
import StationSearchScreen from '../screens/StationSearchScreen';
import InfoModifyScreen from '../screens/InfoModifyScreen';




const payStack = createStackNavigator(
    {
        payinfo: {
            screen: PayinfoScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
    }
)
/*
로그인에 필요한 네비게이터
*/
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
                    color: '#000'
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    
                },
            }
        },
        agree: {
            screen: AgreementScreen,
            navigationOptions: {
                title: "이용약관",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 17,
                    color: '#000'
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
            }
        },
        findPW: {
            screen: FindPasswordScreen,
            navigationOptions: {
                title:"비밀번호 찾기",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 17,
                    color: '#000'
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    
                },
            }
        },
        changePW: {
            screen: ChangepasswordScreen,
            navigationOptions: {
                title: "비밀번호 변경하기",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 17,
                    color: '#000'
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#fff',
                    
                },
            }
        },
        emailLogin: {
            screen: EmailLoginScreen,
            navigationOptions: {
                title: "",
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#384ec9',
                    
                },
                headerTintColor: '#fff'
            }
        }

    },
    {
        initialRouteName: 'login'
    }
)
/*
마이페이지 네비게이터
*/
const MyPageStack = createStackNavigator(
    {
        Mypage: {
            screen: MyPageScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'Mypage'
    }
)
MyPageStack.navigationOptions = ({navigation}) => {
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
const MyModiStack = createStackNavigator(
    {

        MyModi: {
            screen:InfoModifyScreen,
            navigationOptions:{
                header: false
            }
        }
    },
    {
        initialRouteName: 'MyModi'
    }
)
/*
홈 화면 중 메인화면에서 사용하는 네비게이터
*/
const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        My: {
            screen: MyPageStack,
            navigationOptions: {
                headerShown: false,
            }
        },
        Modi: {
            screen: MyModiStack,
            navigationOptions: {
                headerShown: false
            }
        },
        pay: {
            screen: payStack,
            navigationOptions: {
                title: "결제 정보 변경",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 17,
                    color: '#000'
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#fff',
                    
                },
            }
        },
        search: {
            screen: SearchScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        charge: {
            screen: ChargeScreen,
            navigationOptions: {
                title: '충전하기',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 17,
                    coloe: '#828282'
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#fff',
                    
                },
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                title: '',
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#fff',
                    
                },
            }
        },
        StationSearch: {
            screen: StationSearchScreen,
            navigationOptions: {
                title: '',
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#fff',
                    
                },
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


/*
시작 화면
*/
const RootSwitch = createSwitchNavigator(
    {
        init:{
            screen: loginStack
        },
        Main: {
            screen: HomeStack
        },
    }
)






export default createAppContainer(RootSwitch);
