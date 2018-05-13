'use strict';  
import React,{ Component } from 'react';
import {  
    Image,
    Text,
    View,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import {Colors,Images} from '../themes'

export default class SquareHeader extends Component {  
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AAAA</Text>
            </View>   
        )  
    }  
} 

const ISIPHONEX = Dimensions.get('window').width==375 && Dimensions.get('window').height == 812

const styles = StyleSheet.create({  
    container: {  
        flexDirection: 'row',   // 水平排布
        paddingTop: ISIPHONEX ? 44:22,
        paddingLeft: 10, 
        paddingRight: 10,  
        //paddingTop: Platform.OS === 'ios' ? 4 : 0,  // 处理iOS状态栏  
        height: Platform.OS === 'ios' ? (ISIPHONEX ? 44 + 44 : 44 + 22): 48,   // 处理iOS状态栏  
        backgroundColor: Colors.header_bg,  
        alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中  
        justifyContent: 'center'
    },  
    logo: {  
        height: 24,  
        width: 64,  
        resizeMode: 'stretch'  // 设置拉伸模式  
    },  
    searchBox: {  
        height: 30,  
        flexDirection: 'row',  
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充  
        borderRadius: 5,  // 设置圆角边  
        backgroundColor: 'white',  
        alignItems: 'center',  
        marginLeft: 8,  
        marginRight: 12  
    },  
    scanIcon: {  
        height: 26.7,  
        width: 26.7,  
        resizeMode: 'stretch'  
    },  
    searchIcon: {  
        marginLeft: 6,  
        marginRight: 6,  
        width: 16.7,  
        height: 16.7,  
        resizeMode: 'stretch'  
    },  
    voiceIcon: {  
        marginLeft: 5,  
        marginRight: 8,  
        width: 15,  
        height: 15,  
        resizeMode: 'stretch'  
    },  
    inputText: {  
        flex: 1,  
        backgroundColor: 'transparent',  
        fontSize: 14,
        color:Colors.LightGrey
    },
    cancelText: {
        fontSize: 16,
        color:Colors.white_fff
    }
}); 