import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['app','user','home'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST