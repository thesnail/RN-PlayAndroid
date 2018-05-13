import React from 'react'
import {View,Text,ImageBackground,TouchableHighlight} from 'react-native'
import Swiper from 'react-native-swiper'
import {Colors,Images} from '../themes'


export default class Banner extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    _renderPage(image, index,length) {
        return (
            <TouchableHighlight
                key={index}
                style={{flex:1,backgroundColor:'#FFF'}}
                onPress={()=>this.props.onMessageCallback(image)}>
                <ImageBackground  
                resizeMode='stretch'
                source={{uri:image.imagePath}}
                style={{flex:1,justifyContent: 'flex-end',margin:10}}>
                    <View style={{flexDirection:'row',backgroundColor:Colors.drawer,padding:8}}>
                        <Text style={{flex:1,color:Colors.white_fff}}>{image.title}</Text>
                        <Text style={{alignSelf:'flex-end',color:Colors.white_fff}}>{index+1}/{length}</Text>
                    </View>
                </ImageBackground>
            </TouchableHighlight>
        )
    }

    render () {
        const { banners } = this.props
        return (
            <Swiper
            style={{marginLeft:10,marginRight:10,marginBottom:20,borderRadius:10}}
            autoplay={true}
            style={{height:160}}
            showsPagination={false}
            dotColor={Colors.white_fff}
            activeDotColor={Colors.header_bg}>
            {banners[0] ? banners.map((image, index) => this._renderPage(image, index,banners.length)) : <View>aaaa</View>}
            </Swiper>)
    }
}