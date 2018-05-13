import React, { Component } from 'react'
import { View, StatusBar, Platform, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import ReduxNavigation from './app/navigation/ReduxNavigation'
import ReduxPersist from './app/config/ReduxPersist'


class RootContainer extends Component {
  componentDidMount () {
    if (Platform.OS === 'android') {
      this._BackHandler()
    }
  }

  _BackHandler = () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { routes } = this.props.nav
      if (routes.length > 1) {
        this.props.goBack({ key: routes[routes.length - 1]['key'] })
        return true
      }
      // 如果为根,2s 连续返回 即退出
      if (this.lastBackPressed && (this.lastBackPressed + 2000 >= Date.now())) {
        BackHandler.exitApp()
        return true
      }
      this.lastBackPressed = Date.now()
      return true
    })
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  goBack: (params) => dispatch(NavigationActions.back(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)