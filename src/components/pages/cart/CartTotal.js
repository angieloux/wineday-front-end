import React, { useState } from "react";
import { useNavigate } from "react-router";
import { parseError } from "../../../config/api";
import { useGlobalState } from "../../../context/globalContext";
import { createOrder } from "../../../services/orderServices";
import { formatPrice } from "../../../utils/stringUtils";

const CartTotal = ({ itemCount, total, clearCart }) => {
  const navigate = useNavigate();
  const { globalStore } = useGlobalState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { userId } = globalStore;
  console.log(total);

  const handleCheckout = (e) => {
    setLoading(true);
    createOrder(userId, total)
      .then((order) => {
        if (order) {
          clearCart();
          navigate("/orders");
        }
      })
      .catch((error) => {
        const message = parseError(error);
        setErrorMessage(message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="total-container">
      <div className="total">
        <p>Total items: {itemCount}</p>
        <p>Total: {formatPrice(total)}</p>
      </div>
      <div className="checkout">
        {userId ? (
          <button className="button is-black" onClick={handleCheckout}>
            CHECKOUT
          </button>
        ) : (
          <button
            className="button is-black"
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            SIGN IN
          </button>
        )}

        <button className="button is-white" onClick={() => clearCart()}>
          CLEAR CART
        </button>
      </div>
      {loading && <p>Processing your order..</p>}
      <div className="error-message">
        {errorMessage && <p>{errorMessage} </p>}
      </div>
    </div>
  );
};

export default CartTotal;
