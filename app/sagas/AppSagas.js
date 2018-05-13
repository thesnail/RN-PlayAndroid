import { call, put } from 'redux-saga/effects'
import AppActions from '../redux/AppRedux'
import NavigationActions from '../redux/NavigationRedux'

export function * appintro () {
    yield put(AppActions.appsetting({ hasReadAppintro: true }))
    yield put(NavigationActions.redirect())
}