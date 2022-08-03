const initialState = {
    products: [],
    loggedInUser: null,
    user: {
        id: sessionStorage.getItem('id') || null,
        email: sessionStorage.getItem('email') || null,
        username: sessionStorage.getItem('email') || null,
        jwt: sessionStorage.getItem('jwt') || null
    },
    product: {}
}

export default initialState