import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';

import {Colors} from '../themes'

class EditView extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.TextInputView}>
                <TextInput
                    autoCapitalize = 'none'
                    underlineColorAndroid='transparent'
                    returnKeyType={this.props.returnKeyType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType={this.props.keyboardType}
                    editable = {this.props.editable}
                    value={this.props.value}
                    onChangeText={
                        (text)=>{
                            this.props.onChangeText(text);
                        }
                    }
                style={styles.TextInput}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    TextInputView: {
        marginLeft:10,
        marginRight:8,
        marginTop: 8,
        paddingLeft:8,
        backgroundColor: Colors.white_fff,
        flexDirection: 'row',
  },

  TextInput: {
    backgroundColor: Colors.white_fff,
    height:46,
    flex:1,
    borderRadius:5,
    paddingRight:20
  },
});


module.exports = EditView;