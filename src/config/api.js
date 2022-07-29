import axios from 'axios'

const winedayAPI = axios.create({
    baseURL: process.env.REACT_APP_WINEDAY_API
})

export default winedayAPI;