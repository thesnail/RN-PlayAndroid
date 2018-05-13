import { call, put } from 'redux-saga/effects'
import HomeActions from '../redux/HomeRedux'


export function * getHomeArticle (api, action) {
    const { params } = action
    const res = yield call(api.homeArticle,params)

    //console.log(res.data.data)
    //获取banners
    yield put(HomeActions.homeArticles(res.data.data))
    const banners = yield call(api.homeBanners)

    //console.log('--------------------FAS')
    //console.log(banners.data.data)
    yield put(HomeActions.homeBanners(banners.data.data))
}