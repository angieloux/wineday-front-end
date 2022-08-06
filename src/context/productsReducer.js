const productsReducer = (state, action) => {
  switch (action.type) {
    case "setProducts": {
      return {
        ...state,
        products: action.data,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
