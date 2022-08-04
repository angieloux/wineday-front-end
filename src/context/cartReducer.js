export const sumCart = (cartItems) => {
  return {
    itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    total: cartItems.reduce(
      (total, item) => total * (item.price * item.quantity),
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumCart(state.cartItems),
      };

    case "ADD_MORE":
      // find the item to increase
      const increaseItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[increaseItem].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumCart(state.cartItems),
      };
    default:
      return state;
  }
};

export default cartReducer;
