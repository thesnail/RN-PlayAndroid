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

export default class HomeHeader extends Component {  
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.searchBox} 
                    onPress={this.props.onPressCallback1}>  
                    <Image source={Images.icon_search} style={styles.searchIcon}/>  
                    <Text style={styles.inputText}>
                        搜索一下,'码'上发现
                    </Text>
                    {this.props.home?<TouchableOpacity onPress={this.props.onScanCallback} >
                        <Image source={Images.icon_qr} style={styles.voiceIcon}/>
                    </TouchableOpacity>:null}
                </TouchableOpacity>
                {this.props.home?(
                    <TouchableOpacity onPress={this.props.onMessageCallback} >
                        <Image source={Images.icon_message} style={styles.scanIcon}/>  
                    </TouchableOpacity>):
                    <TouchableOpacity onPress={this.props.onCancelCallback} >
                        <Text style={styles.cancelText}>取消</Text>
                    </TouchableOpacity>}
            </View>   
        )  
    }  
} 

const ISIPHONEX = Dimensions.get('window').width==375 && Dimensions.get('window').height == 812

const styles = StyleSheet.create({  
    container: {  
        flexDirection: 'row',
        paddingTop: Platform.OS === 'ios' ? (ISIPHONEX ? 44:22) : 4,
        paddingLeft: 10, 
        paddingRight: 10,  
        height: Platform.OS === 'ios' ? (ISIPHONEX ? 44 + 44 : 44 + 22): 48, 
        backgroundColor: Colors.header_bg,  
        alignItems: 'center'  
    },  
    logo: {  
        height: 24,  
        width: 64,  
        resizeMode: 'stretch'
    },  
    searchBox: {  
        height: 30,  
        flexDirection: 'row',  
        flex: 1,
        borderRadius: 5,
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