import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import rootReducer from "./index"
import {thunk} from "redux-thunk"


const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const myStore = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
    reduxDevtools
))

export default myStore;