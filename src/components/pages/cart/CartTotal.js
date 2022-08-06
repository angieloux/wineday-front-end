import React from "react";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../../context/globalContext";
import { createOrder } from "../../../services/orderServices";

const CartTotal = ({ itemCount, total, clearCart }) => {
  const navigate = useNavigate();
  const { globalStore } = useGlobalState();
  const { loggedInUserId } = globalStore;

  const handleCheckout = (e) => {
    const order = createOrder(loggedInUserId, total, 100);
    if (!order) {
      return null;
    } else if (order) {
      navigate("/orders");
      clearCart();
    }
  };

  return (
    <div className="total-container">
      <div className="total">
        <p>Total items: {itemCount}</p>
        <p>Total: ${total}</p>
      </div>
      <div className="checkout">
        <button className="button is-black" onClick={handleCheckout}>
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
