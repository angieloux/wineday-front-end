import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import Layout from "../../shared/Layout";
import "./cart.styles.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);

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
                  <CartItem {...item} key={item.id} />
                ))}
              </div>
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default Cart;
