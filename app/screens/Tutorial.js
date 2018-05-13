import React from 'react'
import {View,Text,Button} from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import AppActions from '../redux/AppRedux'

class Tutorial extends React.PureComponent{
    render () {
        return (
        <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <Swiper 
            loop={false}
            dotColor='white'
            activeDotColor='red'>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingLeft:20,paddingRight:20}}>
                    <Text>教程页1</Text>
                    <Text>这里是教程页1, 但是我也不知道写什么，你就是来站位的，哈哈</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>教程页2</Text>
                    <Text>哈哈😄，欢迎你👏</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>教程页3</Text>
                    <Button title="点击跳转" onPress={()=>{
                        this.props.readedAppintro()
                    }}/>
                </View>
            </Swiper>
        </View>)
    }
}

const mapDispatchToProps = dispatch => ({
    readedAppintro: () => dispatch(AppActions.appintro(true))
})
  
export default connect(null, mapDispatchToProps)(Tutorial)