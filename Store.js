import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

import Reducer from "./Reducer";

configureStore = (initialState = {}) => {
  const store = createStore(persistReducer({
      key: 'data',
      storage: AsyncStorage,
      blacklist: ['data']
    ,
  }, Reducer), initialState);
  const persister = persistStore(store, null);
  return {store, persister}
} 

export default configureStore;