import { put, select } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'

import {
    isAuthenRouteName,
  isUnauthenRouteName,
  AUTHEN_ROUTE_NAME,
  UNAUTHEN_ROUTE_NAME,
  TUTORIAL_ROUTE_NAME
} from '../navigation/AppNavigation'

export function * redirectFlow () {
  const state = yield select()
  const app = state.app

  const index = state.nav.index
  const routeName = state.nav.routes[index].routeName

  const redirectRoute = (name, childRouteName) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: name })
    ]
  })
  
  if (!app.hasReadAppintro) {
    yield put(redirectRoute(TUTORIAL_ROUTE_NAME))
  } else {
    yield put(redirectRoute(AUTHEN_ROUTE_NAME))
  }
}

/**
 * 处理清除历史某些栈
 */
export function * resetFlow ({ routeName, stackName }) {
  const state = yield select()

  let routes = []
  if (stackName) {
    for (let i = 0; i < state.nav.routes.length; i++) {
      routes.push(state.nav.routes[i])
      if (state.nav.routes[i].routeName === stackName) break
    }
  } else {
    routes = state.nav.routes
  }

  let actions = routes.map((item, key) =>
    key === (routes.length - 1)
    ? NavigationActions.navigate({ routeName: routeName })
    : NavigationActions.navigate({ routeName: item.routeName })
  )

  const redirectRoute = NavigationActions.reset({
    index: actions.length - 1,
    actions: actions
  })

  yield put(redirectRoute)
}

export function * rootFlow () {
  const redirectRoute = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: AUTHEN_ROUTE_NAME })
    ]
  })
  yield put(redirectRoute)
}