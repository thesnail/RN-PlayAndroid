import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {Colors} from '../themes'
import SearchActions from '../redux/SearchRedux'

class Search extends React.PureComponent{
    render () {
        let types = ['A','B','C','D','E','D','C','G']
        return (<View style={{flex:1}}>
            <View style={{flexDirection:'row',flexWrap: 'wrap',marginTop:10}}>
                {types.map((title,index) => (
                    <TouchableOpacity key={index}
                    onPress = {()=>{
                        this.props.search({'k':title})
                    }}
                    style={{
                        backgroundColor:Colors.frost,
                        borderRadius:20,
                        margin:6,
                        padding:4}}>
                        <Text style={{paddingLeft:10,paddingRight:10,color:Colors.header_bg}}>{title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>)
    }
}


const mapDispatchToProps = dispatch => ({
    search:(params) => dispatch(SearchActions.search(params))
})

export default connect(null, mapDispatchToProps)(Search)