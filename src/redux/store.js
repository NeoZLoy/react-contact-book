import { configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
import { 
    persistReducer, 
    persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist'
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    contacts: contactsReducer,
    login: loginReducer,
    register: registerReducer,
})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  }

  const persistReducer = persistReducer(persistConfig, rootReducer)

  export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, }
        }
    }),
    extraReducers: {}
  })

  export const persistor = persistStore(store)