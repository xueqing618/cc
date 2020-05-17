import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import {login,reg,fen,list} from './reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
      login,
      reg,
      fen,
      list
    }),
    composeEnhancers(applyMiddleware(thunk,promise))
    
)

export { store }