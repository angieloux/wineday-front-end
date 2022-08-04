export const sumCart = (cartItems) => {
  return {
    itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    total: cartItems.reduce(
      (total, item) => total + parseInt(item.price) * item.quantity,
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
      const itemToIncrease = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemToIncrease].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumCart(state.cartItems),
      };
    case "DECREASE":
      // find the item to decrease
      const itemToDecrease = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const product = state.cartItems[itemToDecrease];
      if (product.quantity > 1) {
        product.quantity--;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumCart(state.cartItems),
      };
    case "TRASH":
      // find the item to delete
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...newCartItems],
        ...sumCart(newCartItems),
      };
    case "CLEAR":
      return {
        cartItems: [],
        itemCount: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
