import React, { createContext, useReducer } from "react";
import cartReducer, { sumCart } from "./cartReducer";

export const CartContext = createContext();

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: cartFromStorage,
  ...sumCart(cartFromStorage),
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const addMore = (product) => dispatch({ type: "ADD_MORE", payload: product });
  const decrease = (product) =>
    dispatch({ type: "DECREASE", payload: product });
  const trashProduct = (product) =>
    dispatch({ type: "TRASH", payload: product });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const contextValues = {
    ...state,
    addItem,
    addMore,
    decrease,
    trashProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
