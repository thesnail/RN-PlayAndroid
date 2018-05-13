import { call, put } from 'redux-saga/effects'
import HomeActions from '../redux/SearchRedux'


export function * search (api, action) {
    const { params } = action

    const res = yield call(api.hotSearch,params)

    console.log(res)
}