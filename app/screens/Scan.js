import React from 'react'
import {View,Text} from 'react-native'
import { connect } from 'react-redux'
import QRScannerView from 'react-native-qr-scanner'
import {Colors} from '../themes'

class Scan extends React.PureComponent{
    render () {
        return (
        <View style={{flex:1,backgroundColor:Colors.transparent}}>
           <QRScannerView onRead={this.onRead}/>
        </View>)
    }

    onRead = (res) => {
        console.log(res);
    }
}


const mapDispatchToProps = dispatch => ({
    
})

export default connect(null, mapDispatchToProps)(Scan)