import React from "react";
import { useNavigate } from "react-router";

const CartTotal = ({ itemCount, total, clearCart }) => {
  const navigate = useNavigate();

  return (
    <div className="total-container">
      <div className="total">
        <p>Total items: {itemCount}</p>
        <p>Total: ${total}</p>
      </div>
      <div className="checkout">
        <button
          className="button is-black"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>

        <button className="button is-white" onClick={() => clearCart()}>
          CLEAR CART
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
