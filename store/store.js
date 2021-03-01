import {createStore, applyMiddleware, combineReducers} from 'redux'
import {HYDRATE, createWrapper} from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import countriesReducer from './countries/reducer'
import pathsReducer from './routes/reducer'

const bindMiddleware = (middleware) => {
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    countries: countriesReducer,
    paths: pathsReducer,
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)