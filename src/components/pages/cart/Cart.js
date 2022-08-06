import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { formatPrice } from "../../../utils/stringUtils";
import Layout from "../../shared/Layout";
import "./cart.styles.scss";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  const {
    cartItems,
    itemCount,
    total,
    addMore,
    decrease,
    trashProduct,
    clearCart,
  } = useContext(CartContext);
  const cartFunctions = { addMore, decrease, trashProduct };

  return (
    <Layout>
      <>
        <h1 className="cart-title">Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} {...cartFunctions} />
                ))}
              </div>
              <CartTotal
                itemCount={itemCount}
                total={total}
                clearCart={clearCart}
              ></CartTotal>
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default Cart;
