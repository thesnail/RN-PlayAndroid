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
       //console.log(this.props.banners)
    }

    _renderItem = ({item,index}) => {
        return (
          <TouchableOpacity activeOpacity={0.5} style={{padding:10}}>
            <Text
                style={{fontSize:18,color: '#333333',}}
                ellipsizeMode='tail'
                numberOfLines={2}>
                {item.title}
            </Text>
            <View style={{flexDirection: 'row',marginTop:4}}>
                <Text style={{fontSize:12,color:Colors.steel}}>{item.superChapterName}</Text>
                <Text>、</Text>
                <Text style={{fontSize:12,color:Colors.steel}}>{item.chapterName}</Text>
            </View>
            <View style={{flexDirection: 'row',marginTop:4}}>
                <Text style={{fontSize:12,color:Colors.steel,flex:1}}>{item.author}</Text>
                <Text style={{fontSize:12,color:Colors.steel}}>{DateUtil.formatDate(item.publishTime,'yyyy-MM-dd hh:mm:ss')}</Text>
            </View>
          </TouchableOpacity>
        );
    }
//ListHeaderComponent={this._header}
    render () {
        return (
        <FlatList
            ref={(flatList)=>this._flatList = flatList}
            data={this.props.articles.datas}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this._footer}
            ListHeaderComponent={this._header}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
        />)
    }

    _separator = () => {
        return <View style={{marginLeft:10,marginRight:10,height:1,backgroundColor:Colors.LightGrey}}/>;
    }

    _header = () => {
        return <Banner banners={this.props.banners}/>;
    }

    _footer = () => {
        return <Text>---我们也是有底线的---</Text>;
    }
}

const mapDispatchToProps = dispatch => ({
    startup: () => dispatch(HomeActions.readHomeArticles({}))
})

const mapStateToProps = (state) => {
    return {
        articles:state.home.info,
        banners:state.home.banners
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Main)