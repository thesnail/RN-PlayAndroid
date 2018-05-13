/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * author: Scott Wang
 */
import './app/config'
import DebugConfig from './app/config/DebugConfig'
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from './app/redux'

import Root from './app/Root'

// create our store
const store = createStore()

class App extends PureComponent{
  render() {
    return (
      <Provider store={store}>
        <Root>
          <RootContainer />
        </Root>
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App