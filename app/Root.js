import React, { PureComponent } from 'react'
import { View } from 'react-native'

class Root extends PureComponent {
    render () {
      return (
        <View ref={c => (this._root = c)} {...this.props} style={{ flex: 1 }}>
          {this.props.children}
        </View>
      )
    }
  }
  
export default Root