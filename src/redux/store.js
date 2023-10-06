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
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";
import { filterReducer } from "./filters/filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: authReducer,
    filter: filterReducer,
})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, }
        }
    }),
    extraReducers: {}
  })

  export const persistor = persistStore(store)