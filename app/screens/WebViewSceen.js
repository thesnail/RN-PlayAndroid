
import React from 'react'
import {View,Text,WebView} from 'react-native'
import { connect } from 'react-redux'

class WebViewSceen extends React.PureComponent{
    render () {
        const {link} = this.props.navigation.state.params

        console.log(link)
        return (
        <View style={{flex:1}}>
           <WebView
                automaticallyAdjustContentInsets={false}
                source={{ uri:link}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                scalesPageToFit={true}/>
        </View>)
    }
}


const mapDispatchToProps = dispatch => ({
    
})

export default connect(null, mapDispatchToProps)(WebViewSceen)