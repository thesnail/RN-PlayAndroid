import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPressCallback} style={[styles.loginTextView,
      {backgroundColor:this.props.enable?"#1196db":"#CCC"},this.props.style]}>
        <Text style={styles.loginText} >
            {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  loginText: {
      color: '#ffffff',
     fontWeight: 'bold',
  },
  loginTextView: {
    marginLeft:10,
    marginRight:10,
    marginTop: 10,
    height:42,
    backgroundColor: '#3281DD',
    borderRadius:5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
});
