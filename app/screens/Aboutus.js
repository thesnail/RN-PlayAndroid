import React from 'react'
import {View,Text} from 'react-native'
import { connect } from 'react-redux'

class Aboutus extends React.PureComponent{
    render () {
        return (
        <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <Text>关于我们</Text>
        </View>)
    }
}


const mapDispatchToProps = dispatch => ({
    
})


export default connect(null, mapDispatchToProps)(Aboutus)