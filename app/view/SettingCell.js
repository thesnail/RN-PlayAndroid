import React, { PureComponent } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Images} from '../themes'

export default class SettingCell extends PureComponent {
  constructor(props) {
   super(props);
  }
  render() {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={{paddingLeft:20,flexDirection: 'row',height: 46,justifyContent: 'center',alignItems: 'center',backgroundColor:'#FFF',borderBottomWidth:1,borderBottomColor:'#D3D3D3'}}
            onPress={this.props.onPressCallback}>
                <Text style={{flex: 1,color: 'gray'}}>{this.props.title}</Text>
                <Text style={{color: 'gray'}}>{this.props.msg}</Text>
                <Image style={{width: 30, height: 30}} source={Images.ic_my_right}/>
        </TouchableOpacity>
    );
  }
}