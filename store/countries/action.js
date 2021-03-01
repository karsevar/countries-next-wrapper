import axios from 'axios'

export const countriesActionTypes = {
    START_GET_COUNTRIES: "START_GET_COUNTRIES",
    SUCCESS_GET_COUNTRIES: "SUCCESS_GET_COUNTRIES",
    FAILURE_GET_COUNTRIES: "FAILURE_GET_COUNTRIES"
}

export const getAllCountries = () => (dispatch) => {
    // dispatch({type: countriesActionTypes.START_GET_COUNTRIES})

    return axios.get('https://restcountries.eu/rest/v2/all')
    .then(results => {
        dispatch({type: countriesActionTypes.SUCCESS_GET_COUNTRIES, payload: results.data})
    })
    .catch(error => {
        dispatch({type: countriesActionTypes.FAILURE_GET_COUNTRIES, payload: error})
    })
}