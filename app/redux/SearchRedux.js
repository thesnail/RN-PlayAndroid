import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    search: ['params'],
    searchArticles: ['info'],
})

export const SearchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  info: {}
})

/* ------------- Reducers ------------- */

export const search = state => {
  return state.merge({ fetching: true })
}

export const searchArticles = (state, { info }) => {
    return state.merge({ fetching: false, info })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SEARCH]: search,
    [Types.SEARCH_ARTICLES]: searchArticles
})