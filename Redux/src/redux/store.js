
import { applyMiddleware, compose, createStore} from "redux"
import rootReducer from "../redux/reducer/index"
import {persistStore, persistReducer} from "redux-persist"
import localStorage from "redux-persist/lib/storage"
import sessionStorage from "redux-persist/lib/storage/session"


const persistConfig = {
    key:"My Store",
    // storage:localStorage,
    storage:sessionStorage,
    // blacklist:["cartReducer"], // only cartReducer notPersist 
    // whitelist:["cartReducer"] only cartReducer persists
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const myStore = createStore(
    persistedReducer,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )) 
// persisted Store
const persistedStore = persistStore(myStore)

export {myStore, persistedStore};

