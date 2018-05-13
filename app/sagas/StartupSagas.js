import { put, select } from 'redux-saga/effects'
import NavigationActions from '../redux/NavigationRedux'

// process STARTUP actions
export function * startup (action) {
  
  console.log('程序启动')
  const state = yield select()
  
  yield put(NavigationActions.redirect())
}