import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import { connect } from 'react-redux'
import HeaderView from '../view/HeaderView'

import SettingCell from '../view/SettingCell'

import UserActions from '../redux/UserRedux'

class Me extends React.PureComponent{
    render () {
        const {user,navigation,logOut}= this.props
        return (
            <ScrollView style={{flex:1}}>
                <HeaderView
                    username={user.info.name}
                    onPressCallback={(status)=>{
                        if(status){
                            navigation.navigate('Login')
                        }
                    }}
                    signature={'这是是签名...'}/>

                <SettingCell
                    title="收藏"
                    style={{marginTop:10}}
                    onPressCallback={()=>{
                        navigation.navigate('Aboutus');
                    }}/>

                <SettingCell
                    title="分享好友"
                    onPressCallback={()=>{
                        
                    }}/>

                <SettingCell
                    title="清除缓存"
                    onPressCallback={()=>{
                        alert('缓存清除成功')
                    }}/>

                <SettingCell
                    title="关于我们"
                    onPressCallback={()=>{
                        navigation.navigate('Aboutus');
                    }}/>

                    {
                        user.isLoggedIn ? <SettingCell
                        title={'退出登陆'}
                        onPressCallback={()=>{
                               logOut()
                        }}/> : null
                    }

                
            </ScrollView>)
    }
}


const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(UserActions.logout())
})


const mapStateToProps = (state,ownProps) => ({
    user:state.user
})


export default connect(mapStateToProps, mapDispatchToProps)(Me)