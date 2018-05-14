import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native'

import Button from '../view/Button'

import Avatar from 'react-native-badge-avatar'

import {Images} from '../themes'

class HeaderView extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={()=>this.props.onPressCallback(this.props.username == null ?true:false)}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 8,
                    height: 200,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: '#d9d9d9',
                }}>
                    <Avatar
                        size={68}
                        name={this.props.username}
                        placeholder={Images.img_default_avatar}/>

                    <View style={{alignItems: 'center'}}>
                        <Text style={{
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            fontSize: 16
                        }}>
                            {this.props.username == null ?'点击头像登陆':this.props.username}
                        </Text>
                        <Text style={{
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            fontSize: 10
                        }}>
                            {this.props.signature}
                        </Text>
                 </View>
            </TouchableOpacity>
        );
    }
}

module.exports = HeaderView;