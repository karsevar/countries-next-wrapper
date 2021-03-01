import axios from 'axios'

export const routesActionTypes = {
    START_GET_ROUTES: 'START_GET_ROUTES',
    SUCCESS_GET_ROUTES: 'SUCCESS_GET_ROUTES',
    FAILURE_GET_ROUTES: 'FAILURE_GET_ROUTES',
}

export const getAllRoutes = () => (dispatch) => {
    return axios.get('https://restcountries.eu/rest/v2/all')
    .then(results => {
        dispatch({type: routesActionTypes.START_GET_ROUTES, payload: results.data})
    })
    .catch(error => {
        dispatch({type: routesActionTypes.FAILURE_GET_ROUTES})
    })
}