import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './state'

export default createStore(rootReducer, applyMiddleware(thunk));
