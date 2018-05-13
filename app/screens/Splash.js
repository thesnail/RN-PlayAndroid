import React from 'react'
import {ImageBackground,View,Text} from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '../redux/StartupRedux'
import ReduxPersist from '../config/ReduxPersist'
import {Images} from '../themes'

class Splash extends React.PureComponent{

    render () {
        return (
            <ImageBackground
            source={Images.Splash}
            style={{
              flex:1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexDirection: 'column',
              width: null, //必须为null
              height: null, //必须为null
            }}>
            <View style={{height:38}}>
              <Text style={{fontSize:12,color:'#FFF'}}>©2018 Scott's 工作室😄. All rights reserved.</Text>
            </View>
          </ImageBackground>)
    }
}


const mapDispatchToProps = dispatch => ({
    startup: () => dispatch(StartupActions.startup()),
})

export default connect(null, mapDispatchToProps)(Splash)