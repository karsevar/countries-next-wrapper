import { countriesActionTypes } from '../countries/action';
import {routesActionTypes} from './action'

export default function reducer(state = [], action) {
    switch(action.type) {
        case routesActionTypes.SUCCESS_GET_ROUTES:
            const paths = action.payload.map(name => {
                return {
                    params: {
                        country: name.name
                    }
                }
            })
            return paths
        case routesActionTypes.FAILURE_GET_ROUTES:
            return state
        default:
            return state
    }
}