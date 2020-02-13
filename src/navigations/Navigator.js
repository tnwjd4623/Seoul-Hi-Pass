import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import StoreDetailScreen from "../screens/StoreDetailScreen";
import screen_15 from '../screens/screen_15';
import OrderScreen from '../screens/OrderScreen';
import {createStackNavigator} from 'react-navigation-stack'
import PayScreen from '../screens/PayScreen';
import LoginScreen from '../screens/LoginScreen';
import JoinScreen from '../screens/JoinScreen';
import AgreementScreen from '../screens/AgreementScreen';

import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import FeatherIcon from '../components/FeatherIcon'
import MapScreen from '../screens/MapScreen';
import LocationSearchScreen from '../screens/LocationSearchScreen';
import ReviewScreen from '../screens/ReviewScreen';
import ReviewWriteScreen from '../screens/ReviewWriteScreen';
import MyListScreen from '../screens/MyListScreen';
import MyPageScreen from '../screens/MyPageScreen';
import MyInfoScreen from '../screens/MyInfoScreen';
import MyReviewScreen from '../screens/MyReviewScreen';
import MyPayScreen from '../screens/MyPayScreen';
import PreorderScreen from '../screens/PreorderScreen';
import NoticeScreen from '../screens/NoticeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import WriteQuestionScreen from '../screens/WriteQuestionScreen';
import FAQScreen from '../screens/FAQScreen';
import PreorderListscreen from '../screens/PreorderListScreen';
/*
가게 상세정보 -> 메뉴 -> 주문 -> 완료 네비게이터
*/
const DetailStack = createStackNavigator(
    {
        StoreDetail: {
            screen: StoreDetailScreen,
            navigationOptions: {
                headerShown: false
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
        },

        Review: {
            screen: ReviewScreen,
            navigationOptions: {
                title: "리뷰 전체",
                headerTitleAlign: 'center'
            }
        },
        ReviewWrite: {
            screen: ReviewWriteScreen,
            navigationOptions: {
                title: '리뷰 작성하기',
                headerTitleAlign: 'center'
            }
        }
    },
    {
        initialRouteName: 'StoreDetail',
    }
)
DetailStack.navigationOptions = ({navigation}) => {
    let header;
    if(navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if(route.routeName != "StoreDetail") {
                header = null;
            }
        });
    }
    return {
        header
    }
}
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
        Map: {
            screen: MapScreen,
            navigationOptions: {
                headerTitleAlign: 'center'
            }
        },
        Search: {
            screen: LocationSearchScreen,
            navigationOptions: {
                headerTitleAlign: 'center'
            }
        },
        Detail:{
            screen: DetailStack,
            navigationOptions: {
                headerShown: false
            }
        },
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
        MyInfo:{
            screen: MyInfoScreen,
            navigationOptions: {
                title: '내 정보 수정',
                headerTitleAlign: 'center'
            }
        },
        MyReview: {
            screen: MyReviewScreen,
            navigationOptions: {
                title: '나의 리뷰',
                headerTitleAlign: 'center'
            }
        },
        MyPay: {
            screen: MyPayScreen,
            navigationOptions: {
                title: '지난 주문/결제 내역',
                headerTitleAlign: 'center'
            }
        },
        Notice: {
            screen: NoticeScreen,
            navigationOptions: {
                title: '공지사항',
                headerTitleAlign: 'center'
            }
        },
        Question: {
            screen: QuestionScreen,
            navigationOptions: {
                title: '1:1문의',
                headerTitleAlign: 'center'
            }
        },
        WriteQuestion: {
            screen:WriteQuestionScreen,
            navigationOptions: {
                title: '1:1문의',
                headerTitleAlign: 'center'
            }
        },
        FAQ: {
            screen: FAQScreen,
            navigationOptions: {
                title: 'FAQ',
                headerTitleAlign: 'center'
            }
        }
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
/*
미리 주문하기
*/
const PreOrderStack = createStackNavigator(
    {
        Preorder: {
            screen: PreorderScreen,
            navigationOptions:{
                headerShown: false,
            }
        },
        PreOrderList: {
            screen: PreorderListscreen,
            navigationOptions: {
                title: '미리 주문하기',
                headerTitleAlign: 'center'
            }
        },
        Detail: {
            screen: DetailStack,
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {
        initialRouteName: 'Preorder'
    }
)
PreOrderStack.navigationOptions = ({navigation}) => {
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
나의 가게
*/
const MyListStack = createStackNavigator(
    {
        MyList: {
            screen: MyListScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Detail: {
            screen: DetailStack,
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {
        initialRouteName: 'MyList'
    }
)
MyListStack.navigationOptions = ({navigation}) => {
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
메인 바텀 네비게이터
*/
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
        PreOrder: {
            screen: PreOrderStack,
            navigationOptions:{
                tabBarLabel: "",
                tabBarIcon:({focused}) => (
                    <FeatherIcon name={"silverware-fork-knife"} focused={focused}/>
                ),
                
            }
    
        },
        Heart: {
            screen: MyListStack,
            navigationOptions:{
                tabBarLabel: "",
                tabBarIcon:({focused}) => (
                    <FeatherIcon name={"heart"} focused={focused}/>
                ),
                
            }
  
        },
        Setting: {
            screen: MyPageStack,
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

/*
시작 화면
*/
const RootSwitch = createSwitchNavigator(
    {
        init:{
            screen: loginStack
        },
        Main: {
            screen: MainNavigator
        },
    }
)






export default createAppContainer(RootSwitch);
