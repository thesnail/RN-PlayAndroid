
import ReduxPersist from '../config/ReduxPersist'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import StartupActions from '../redux/StartupRedux'
import DebugConfig from '../config/DebugConfig'

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const startup = () => store.dispatch(StartupActions.startup())

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    console.log('---------------------------------------------->')

    console.log(localVersion+'    '+localVersion)

    if (localVersion !== reducerVersion) {
      if (DebugConfig.useReactotron) {
        console.tron.display({
          name: 'PURGE',
          value: {
            'Old Version:': localVersion,
            'New Version:': reducerVersion
          },
          preview: 'Reducer Version Change Detected',
          important: true
        })
      }
      setTimeout(() => {
        persistStore(store, null, startup)
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      }, 3000)
    } else {
      setTimeout(() => {
        persistStore(store, null, startup)
      }, 3000)
    }
  }).catch(() => {
    setTimeout(() => {
      persistStore(store, null, startup)
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    }, 3000)
  })
}

export default { updateReducers }