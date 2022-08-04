import React, { useContext } from "react";
import cartIcon from "../../../assets/cart-icon.png";
import { CartContext } from "../../../context/cartContext";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <img src={cartIcon} alt="Cart Icon" />
      {itemCount > 0 && <span className="cart-count"> {itemCount}</span>}
    </div>
  );
};

export default CartIcon;
