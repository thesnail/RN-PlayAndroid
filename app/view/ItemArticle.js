import PropTypes from 'prop-types'
import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

class ItemArticle extends React.PureComponent{
    render() {
        <TouchableHighlight onPress={()=>{
            console.log('点击事件');
        }}>
        </TouchableHighlight>
    }
}

export default ItemArticle