import React from "react";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../../context/globalContext";
import { createOrder } from "../../../services/orderServices";
import { formatPrice } from "../../../utils/stringUtils";
// import OrderConfirmation from "../orders/OrderConfirmation";

const CartTotal = ({ itemCount, total, clearCart }) => {
  const navigate = useNavigate();
  const { globalStore } = useGlobalState();
  const { userId } = globalStore;
  console.log(total);

  const handleCheckout = (e) => {
    createOrder(userId, total)
      .then((order) => {
        if (order) {
          clearCart();
          navigate("/orders");
        } else if (!order) return null;
      })
      .catch((err) => {
        console.error(err);
      });

    // if (!order) {
    //   return null;
    // } else if (order) {
    //   clearCart();
    //   globalDispatch({ type: "setFinalisedOrder", data: order });
    //   console.log(order);
    // }
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
    </div>
  );
};

export default CartTotal;
