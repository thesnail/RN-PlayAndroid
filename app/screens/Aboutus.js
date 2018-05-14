import React from 'react'
import {View,Text} from 'react-native'
import { connect } from 'react-redux'

import SettingCell from '../view/SettingCell'

class Aboutus extends React.PureComponent{
    render () {
        const {navigate} = this.props.navigation;
        return (
        <View>
           <SettingCell
                title="联系我们"
                onPressCallback={()=>{
                    navigate('WebViewSceen',{link:'http://scott-cry.win'})
                }}/>
            <SettingCell
                title="开源地址"
                onPressCallback={()=>{
                    navigate('WebViewSceen',{link:'https://github.com/thesnail/RN-PlayAndroid'})
                }}/>
            <SettingCell
                title="我要分享"
                onPressCallback={()=>{
                    
                }}/>
            <SettingCell
                title="问题反馈"
                onPressCallback={()=>{
                    navigate('WebViewSceen',{link:'https://github.com/thesnail/RN-PlayAndroid/issues'})
                }}/>
        </View>)
    }
}


const mapDispatchToProps = dispatch => ({
    
})


export default connect(null, mapDispatchToProps)(Aboutus)