import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signinRequest: ['params'],
  signupRequest: ['params'],
  signinFailure: ['info'],
  signinSuccess: ['info'],
  logout:null,
  logoutSuccess: null,
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  isLoggedIn: false,
  info: {}
})

/* ------------- Reducers ------------- */

export const signinRequest = state => {
  return state.merge({ fetching: true })
}

export const signupRequest  = (state) =>{
  return state.merge({ fetching: false, error: true});
}

export const signinFailure  = (state, { info }) =>{
  return state.merge({ fetching: false, error: true,info:info});
}

export const signinSuccess = (state, { info }) => {
  return state.merge({ fetching: false, isLoggedIn: true, info })
}

export const logoutSuccess = state => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNIN_REQUEST]: signinRequest,
  [Types.SIGNUP_REQUEST]: signupRequest,
  [Types.SIGNIN_SUCCESS]: signinSuccess,
  [Types.SIGNIN_FAILURE]: signinFailure,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
})