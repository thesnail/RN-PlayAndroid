import { put, select } from 'redux-saga/effects'
import NavigationActions from '../redux/NavigationRedux'

// process STARTUP actions
export function * startup (action) {
  yield put(NavigationActions.redirect())
}