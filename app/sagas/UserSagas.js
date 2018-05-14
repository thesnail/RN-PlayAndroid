import { call, put } from 'redux-saga/effects'
import UserActions from '../redux/UserRedux'
import NavigationActions from '../redux/NavigationRedux'

export function * sigin (api, action) {
  const { params } = action
  const res = yield call(api.userLogin,params)

  console.log(res)
  
  if(res.data === null ){
    console.log('登陆失败,请检查网络链接...')
  }else if(res.data.code === 101){
    console.log('用户名，或者密码错误')
    yield put(UserActions.signinFailure(res.data))
  }else{
    yield put(UserActions.signinSuccess(res.data))

    //yield put(NavigationActions.reset('Me'))
    yield put(NavigationActions.redirect())
  }
}
 
//注册
export function * signup(api,action){
  const { params } = action

  const res = yield call(api.userSignup,params)
  

  console.log(res)
}

//退出登陆
export function * logout () {
  yield put(UserActions.logoutSuccess())
}