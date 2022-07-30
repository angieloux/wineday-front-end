import winedayAPI from '../config/api'

export const logInUser = async (loginDetails) => {
    try {
        const response = await winedayAPI.post('/auth/login', loginDetails)
        return response.data
    } catch(err) {
        throw err
    }
}