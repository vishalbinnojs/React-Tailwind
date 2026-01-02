import { configureStore } from "@reduxjs/toolkit"
import rootReducer from './features/index'
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import localStorage from "redux-persist/lib/storage"


const persistConfig = {
    key: 'Users',
    storage: localStorage,
    // whitelist : ['users']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const myStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),

})
const persistedStore = persistStore(myStore)

export { myStore, persistedStore };