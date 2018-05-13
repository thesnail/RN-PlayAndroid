import React from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {Colors,Images} from '../themes'
import Banner from '../view/Banner'

import HomeActions from '../redux/HomeRedux'

import DateUtil from '../lib/DateUtil'

class Main extends React.PureComponent{

    componentDidMount () {
        this.props.startup()
    }

    _renderItem = ({item,index}) => {
        const {navigate} = this.props.navigation;

        return (
          <TouchableOpacity activeOpacity={0.9} style={{padding:10}}
          onPress={()=>{
            navigate('WebViewSceen',item)
          }}>
            <Text
                style={{fontSize:18,color: '#333333',}}
                ellipsizeMode='tail'
                numberOfLines={2}>
                {item.title}
            </Text>
            {item.desc == '' ? null :(<Text style={{marginTop:10}}>{item.desc}</Text>)}
            <View style={{flexDirection: 'row',marginTop:4,justifyContent:'flex-end'}}>
                <View style={{backgroundColor:Colors.frost,borderRadius:12,padding:2}}>
                    <Text style={{fontSize:8,paddingLeft:5,paddingRight:5}}>{item.superChapterName}</Text>
                </View>
                <View style={{backgroundColor:Colors.frost,borderRadius:12,padding:2}}>
                    <Text style={{fontSize:8,paddingLeft:5,paddingRight:5}}>{item.chapterName}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',marginTop:4}}>
                <Text style={{fontSize:12,color:Colors.coal,flex:1}}>{item.author}</Text>
                <Text style={{fontSize:12,color:Colors.coal}}>{DateUtil.formatDate(item.publishTime,'yyyy-MM-dd hh:mm:ss')}</Text>
            </View>
          </TouchableOpacity>
        );
    }
//ListHeaderComponent={this._header}
    render () {
        const {articles,banners}= this.props
        return (
        <FlatList
            ref={(flatList)=>this._flatList = flatList}
            data={articles.datas == null ? []:articles.datas}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this._footer}
            ListHeaderComponent={() => this._header(banners)}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
        />)
    }

    _separator = () => {
        return <View style={{marginLeft:10,marginRight:10,height:1,backgroundColor:Colors.LightGrey}}/>;
    }

    _header = (banners) => {
        return <Banner 
            banners={banners} 
            onMessageCallback={(item)=>{
                const {navigate} = this.props.navigation;
                navigate('WebViewSceen',{link:item.url})
            }}/>;
    }

    _footer = () => {
        return <View style={{marginTop:20,marginBottom:20,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12}}>--- 我们也是有底线的 ---</Text>;
        </View>
    }
}

const mapDispatchToProps = dispatch => ({
    startup: () => dispatch(HomeActions.readHomeArticles({}))
})

const mapStateToProps = (state,ownProps) => ({
    articles:state.home.info,
    banners:state.home.banners
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)