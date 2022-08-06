const globalReducer = (state, action) => {
  switch (action.type) {
    case "setProducts": {
      return {
        ...state,
        products: action.data,
      };
    }
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
        userId: action.data[0],
        username: action.data[1],
      };
    }
    case "removeLoggedInUser": {
      return {
        ...state,
        loggedInUser: null,
      };
    }
    case "setJWT": {
      sessionStorage.setItem("jwt", action.data);
      return {
        ...state,
        jwt: action.data,
      };
    }
    case "removeJWT": {
      sessionStorage.removeItem("jwt");
      return {
        ...state,
        jwt: null,
      };
    }
    case "setOrders": {
      return {
        ...state,
        orders: action.data,
      };
    }
    default:
      return state;
  }
};

export default globalReducer;
