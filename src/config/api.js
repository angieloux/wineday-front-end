import axios from 'axios'


const winedayAPI = axios.create({
    baseURL: process.env.REACT_APP_WINEDAY_API
})

winedayAPI.interceptors.request.use(req => {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt) {
        req.headers["Authorization"] = `Bearer ${jwt}`;
    } 
    return req;
})

export default winedayAPI;

export function parseError(error) {
    const {response} = error;
    if(!response) return "Oops, something went wrong";
    if(response.data.error) return response.data.error;
    if(response.data.errors) return response.data.errors.join(", ");

}