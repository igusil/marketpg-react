import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/rootReducers'

let middleware = [reduxThunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware))