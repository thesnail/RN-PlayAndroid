import React from 'react'

import { View, Text,FlatList,ImageBackground,Image} from 'react-native';

import { StackNavigator, TabNavigator, NavigationActions,TabBarTop,TabBarBottom} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'


import Splash from '../screens/Splash'
import Tutorial from '../screens/Tutorial'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import {Colors,Images} from '../themes'
import I18n from '../i18n'

import System from '../screens/System'
import Navigation from '../screens/Navigation'
import Project from '../screens/Project'

import Main from '../screens/Main'
import Rest from '../screens/Rest'
import Me from '../screens/Me'
import Search from '../screens/Search'
import Message from '../screens/Message'
import Scan from '../screens/Scan'


import HomeHeader from '../view/HomeHeader'
import SquareHeader from '../view/SquareHeader'

//不同状态
export const AUTHEN_ROUTE_NAME = 'Home'
export const UNAUTHEN_ROUTE_NAME = 'Login'
export const TUTORIAL_ROUTE_NAME = 'Tutorial'

const Square = TabNavigator({
    System:{
        screen:System
    },
    Navigation:{
        screen:Navigation
    },
    Project:{
        screen:Project
    }
},{
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    animationEnabled: true,
    headerMode:'none',
    navigationOptions:{upperCaseLabel:false}
})

const Tap = TabNavigator({
    Main: {
        screen: Main,
        navigationOptions:({ navigation }) => ({
          title:'Home',
          titleStyle:{
            textColor:'#DDA'
          },
          tabBarLabel:'Home',
          tabBarIcon: ({ tintColor, focused }) => (  
            <Image resizeMode='contain'  
                source={Images.ic_home}  
                style={{tintColor: tintColor,width: 25,height:25}}
            />  
          ),
          header:
            <HomeHeader home={true} onPressCallback1={()=>{
                const {navigate} = navigation;
                navigate('Search')
            }}
            onScanCallback={()=>{
                const {navigate} = navigation;
                navigate('Scan')
            }}
            onMessageCallback={()=>{
                const {navigate} = navigation;
                navigate('Message')
            }}/>
        })
    },Rest: {
        screen: Square,
        navigationOptions:({ navigation }) => ({
          title:'Play Android广场',
          titleStyle:{
            textColor:'#DDA'
          },
          header:<SquareHeader/>,
          tabBarLabel:'广场',
          tabBarIcon: ({ tintColor, focused }) => (  
            <Image resizeMode='contain'  
                source={Images.ic_notes}  
                style={{tintColor: tintColor,width: 25,height:25}}
            />  
          )
        })
    },Me: {
        screen: Me,
        navigationOptions:{
          title:'我的',
          titleStyle:{
            textColor:'#DDA'
          },
          tabBarLabel:'我的',
          tabBarIcon: ({ tintColor, focused }) => (  
            <Image resizeMode='contain'  
                source={Images.ic_me}  
                style={{tintColor: tintColor,width: 25,height:25}}
            />  
          )
        }
    }
},{
    tabBarOptions: {
      //activeTintColor: '#1296db',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true
  })


//已经授权，跳转到主界面
const AUTHEN_SCREEN = {
    [AUTHEN_ROUTE_NAME] : {
        screen:Tap
    }
}

//用户没有授权, 跳转到登录界面
const UNAUTHEN_SCREEN = {
    [UNAUTHEN_ROUTE_NAME] : {
        screen:Login,
        navigationOptions:({ navigation }) => ({
            title:I18n.t('signIn')
        })
    },
    Signup:{
        screen:Signup,
        navigationOptions:({ navigation }) => ({
            title:I18n.t('signUp')
        })
    }
}

//第一次启动App,跳转到教程界面
const TUTORIAL_SCREEN = {
    [TUTORIAL_ROUTE_NAME] : {
        screen:Tutorial,
        navigationOptions:{
            header:null
        }
    }
}

export function isAuthenRouteName (routeName) {
    return !!AUTHEN_SCREEN[routeName]
}

export function isUnauthenRouteName (routeName) {
    return !!UNAUTHEN_SCREEN[routeName]
}

export const AppNavigation = StackNavigator({
    Splash:{
        screen:Splash,
        navigationOptions:{
            header:null
        }
    },
    ...AUTHEN_SCREEN,
    ...UNAUTHEN_SCREEN,
    ...TUTORIAL_SCREEN,
    Search:{
        screen:Search,
        navigationOptions:({ navigation }) => ({
            header:
            <HomeHeader home={false} onPressCallback1={()=>{
            }}
            onCancelCallback={()=>{
                const {goBack} = navigation;
                goBack()
            }}/>
        })
    },
    Message:{
        screen:Message,
        navigationOptions:{
            title:'Message'
        }
    },
    Scan:{
        screen:Scan,
        navigationOptions:{
            title:'Scan',
            headerStyle:{
                backgroundColor:Colors.transparent
            }
        }
    }
},{
    initialRouteName: 'Splash',
    gesturesEnabled: true,
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }),
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); },  // 回调
    navigationOptions:{
      headerStyle:{
        backgroundColor:Colors.header_bg
      },
      headerTintColor:Colors.white_fff,
      headerBackTitle:'Back'
    }
})

// handler
const defaultGetStateForAction = AppNavigation.router.getStateForAction
  AppNavigation.router.getStateForAction = (action, state) => {
    const { type, routeName } = action
  
    // jump twice
    if (state &&
      type === NavigationActions.NAVIGATE &&
      routeName === state.routes[state.routes.length - 1].routeName
    ) return null
  
    // back to one stack
    if (state && type === NavigationActions.BACK) {
      const backRoute = state.routes.find(route => route.routeName === action.key)
      if (backRoute) {
        const backRouteIndex = state.routes.indexOf(backRoute)
        const route = {
          ...state,
          routes: state.routes.slice(0, backRouteIndex + 1),
          index: backRouteIndex
        }
        return route
      }
    }
  
    return defaultGetStateForAction(action, state)
}