import React from 'react'
import {
    Text,
    View,
    StatusBar,
    InteractionManager,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

import UserActions from '../redux/UserRedux'

import I18n from '../i18n'
import Button from '../view/Button'
import {Colors} from '../themes'
import EditView from '../view/EditView'

class Login extends React.PureComponent{

    constructor(){
        super();
        this.state = {
          email:'',
          password:''  
        }
    }

    render () {
        const {navigate} = this.props.navigation;
        return (
        <View style={{paddingTop:20}}>
            <StatusBar
              backgroundColor={Colors.header_bg}
              barStyle="light-content"/>

              <EditView 
            placeholder='E-mail'
            keyboardType='email-address'
            returnKeyType='done'
            value={this.state.email}
            onChangeText={(msg)=>{
              this.setState({email:msg});
            }}/>

          <EditView 
            placeholder='输入用户密码'
            value={this.state.password}
            returnKeyType='done'
            secureTextEntry={true}
            onChangeText={(msg)=>{
              this.setState({password:msg});
            }}/>

          <View 
            style={{
              flexDirection:'row',
              justifyContent:'flex-end',
              marginRight:8}}>
            <TouchableOpacity 
              style={{
                paddingTop:8,
                paddingBottom:8,
                paddingLeft:10,
                paddingRight:10}} 
                onPress={()=>{
              
            }}>
              <Text>{I18n.t('@@ForgetPassword')}</Text>
            </TouchableOpacity>
          </View>

          <Button
            enable={true}
            name={I18n.t('signIn')}
            onPressCallback={()=>{
                this.props.handleLogin({username:'my_snail@126.com',password:'123456'})
            }}/>

          <Button
            enable={true}
            name={I18n.t('signUp')}
            onPressCallback={()=>{
              navigate('Signup');
            }}/>
        </View>)
    }
}

const getVisible = (state) => {
  
}


const mapDispatchToProps = dispatch => ({
    handleLogin:(params) => dispatch(UserActions.signinRequest(params))
})

const mapStateToProps = (state) => {
  return {
    error: getVisible(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)