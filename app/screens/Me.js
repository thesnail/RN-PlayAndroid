import React from 'react'
import {View,Text} from 'react-native'
import { connect } from 'react-redux'
import Avatar from 'react-native-badge-avatar'

class Me extends React.PureComponent{
    render () {
        return (
        <View style={{flex:1}}>
           <Avatar 
            size={68}
            name="Dean Guo"
            style={{ margin: 6 }}
            placeholder={require('../themes/img/icon_voice.png')}
            source="https://avatars3.githubusercontent.com/u/8385255?s=460&v=4"
            onPress={() => alert("click")}/>
        </View>)
    }
}


const mapDispatchToProps = dispatch => ({
    
})


const mapStateToProps = (state) => {
    console.log('----------------->    Me    <------------------')
    console.log(state)
    return {
        error: null
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Me)