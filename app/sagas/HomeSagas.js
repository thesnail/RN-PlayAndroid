import { call, put } from 'redux-saga/effects'
import HomeActions from '../redux/HomeRedux'


export function * getHomeArticle (api, action) {
    const { params } = action
    const res = yield call(api.homeArticle,params)
    yield put(HomeActions.homeArticles(res.data.data))

    const banners = yield call(api.homeBanners)
    yield put(HomeActions.homeBanners(banners.data.data))

    const systems = yield call(api.homeSystems)
    yield put(HomeActions.systemsData(systems.data.data))
}