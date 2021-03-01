import axios from 'axios'

export async function getAllCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const allCountries = await res.json()
    return allCountries
}

export async function getCountryInfo(country) {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    const countryInfo = await res.json()
    return countryInfo
}

export async function getAllCountryNames() {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const countryNames = await res.json()
    return countryNames.map(name => {
        return {
            params: {
                country: name.name
            }
        }
    })
}