import {countriesActionTypes} from './action'

export default function reducer(state = [], action) {
    switch(action.type) {
        case countriesActionTypes.SUCCESS_GET_COUNTRIES:
            console.log('data from reducer', action.payload[0])
            return action.payload
        case countriesActionTypes.FAILURE_GET_COUNTRIES:
            return state
        default:
            return state
    }
}