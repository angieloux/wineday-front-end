export const logInUser = (loginDetails) => {
    return new Promise((resolve, reject) => {
        resolve(loginDetails.email)
    })
}