import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import { connect } from 'react-redux'
import HeaderView from '../view/HeaderView'

import SettingCell from '../view/SettingCell'

class Me extends React.PureComponent{
    render () {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={{flex:1}}>
                <HeaderView
                    //username={'Scott'}
                    signature={'这是是签名...'}/>

                <SettingCell
                    title="收藏"
                    style={{marginTop:10}}
                    onPressCallback={()=>{
                            navigate('Aboutus');
                    }}/>

                <SettingCell
                    title="分享好友"
                    onPressCallback={()=>{
                            navigate('Aboutus');
                    }}/>

                <SettingCell
                    title="清除缓存"
                    onPressCallback={()=>{
                            navigate('Aboutus');
                    }}/>

                <SettingCell
                    title="关于我们"
                    onPressCallback={()=>{
                            navigate('Aboutus');
                    }}/>

                <SettingCell
                    title="退出登陆"
                    onPressCallback={()=>{
                            navigate('Aboutus');
                    }}/>

                
            </ScrollView>)
    }
}


const mapDispatchToProps = dispatch => ({
    
})


const mapStateToProps = (state) => {
    console.log('----------------->    Me    <------------------')
    console.log(state)
    return {
        error: null
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Me)