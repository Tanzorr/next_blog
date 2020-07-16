import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

import reducers from './reducers'

const middleware =[thunk]

const store = createStore(
        reducers,
        undefined,
        composeWithDevTools(applyMiddleware(...middleware)))



export default store;