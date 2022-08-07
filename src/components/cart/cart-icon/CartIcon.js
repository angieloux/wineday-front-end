import React, { useContext } from "react";
import { useNavigate } from "react-router";
import cartIcon from "../../../assets/cart-icon.png";
import { CartContext } from "../../../context/cartContext";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-icon-container" onClick={() => navigate("/cart")}>
      <img src={cartIcon} alt="Cart Icon" />
      {itemCount > 0 ? <span className="cart-count"> {itemCount}</span> : null}
    </div>
  );
};

export default CartIcon;
