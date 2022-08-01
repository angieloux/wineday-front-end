const globalReducer = (state, action) => {
    switch(action.type) {
        case "setProducts": {
            return {
                ...state,
                products: action.data
            }
            
        }
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "removeLoggedInUser": {
            return {
                ...state,
                loggedInUser: null
            }
        }
        case "setJWT": {
            sessionStorage.setItem('jwt', action.data)
            return {
                ...state,
                jwt: action.data
            }
        }
        case "removeJWT": {
            sessionStorage.removeItem('jwt')
            return {
                ...state,
                jwt: null
            }
        }
        default: 
            return state;
    }
    
}

export default globalReducer;