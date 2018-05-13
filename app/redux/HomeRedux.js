import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  readHomeArticles: ['params'],
  homeArticles: ['info'],
  homeBanners: ['banners'],
  systemsData: ['system'],
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  info: {},
  banners:{},
  system:{}
})

/* ------------- Reducers ------------- */

export const readHomeArticles = state => {
  return state.merge({ fetching: true })
}

export const homeArticles = (state, { info }) => {
    return state.merge({ fetching: false, info })
}

export const homeBanners = (state, { banners }) => {
  return state.merge({ fetching: false,banners })
}

export const systemsData = (state, { system }) => {
  return state.merge({ fetching: false,system })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.HOME_ARTICLES]: homeArticles,
    [Types.HOME_BANNERS]: homeBanners,
    [Types.READ_HOME_ARTICLES]: readHomeArticles,
    [Types.SYSTEMS_DATA]: systemsData
})