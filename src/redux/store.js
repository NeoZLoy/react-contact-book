import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
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



const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  }


  export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, }
        }
    }),
    extraReducers: {}
  })

  export const persistor = persistStore(store)