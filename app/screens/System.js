import React from 'react'
import {View,Text,SectionList} from 'react-native'
import { connect } from 'react-redux'

class System extends React.PureComponent{
    
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        
    }


    _renderSectionHeader = (info, index) => {
        return(
            <View>
                <Text>AAA</Text>
            </View>
        )
    }

    _renderItem = ( item, index) => {
        return(
            <View key={index}>
                <Text>DDDD</Text>
            </View>
        )
    }

    _separator = () => {
        return <View style={{marginLeft:10,marginRight:10,height:1,backgroundColor:Colors.LightGrey}}/>;
    }
    
    render () {
        const sections =  this.props.system
        return (<View/>
           /* <SectionList
                renderSectionHeader={this._renderSectionHeader}
                renderItem={this._renderItem}
                sections={sections}
        ItemSeparatorComponent={this._separator}/>*/)
    }
}

const mapDispatchToProps = dispatch => ({
    
})

const mapStateToProps = (state) => {
    return {
        system:state.home.system
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(System)