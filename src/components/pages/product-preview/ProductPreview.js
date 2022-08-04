import React, { useContext } from "react";
import "./product-preview.styles.scss";
import { truncate } from "../../../utils/stringUtils";
import image from "../../../assets/product.jpg";
import { useNavigate } from "react-router";
import { CartContext } from "../../../context/cartContext";
import { inCart } from "../../../utils/helpers";

const ProductPreview = (props) => {
  const { id, title, price, points, variety, description } = props;
  const product = { title, price, points, variety, description, id };
  const navigate = useNavigate();
  const { addItem, cartItems, addMore } = useContext(CartContext);
  const itemInCart = inCart(product, cartItems);
  console.log(cartItems);

  return (
    <div className="product-preview">
      <div className="product-image" onClick={() => navigate(`./${id}`)}>
        <img src={image} alt={title} />
      </div>
      <div className="product-short-info">
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{truncate(description, 100)}</p>
        <p>{variety}</p>
        <p>Score: {points}</p>

        {!itemInCart ? (
          <button
            className="button is-black nomad-btn"
            onClick={() => addItem(product)}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            className="button is-white nomad-btn"
            id="btn-white-outline"
            onClick={() => addMore(product)}
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
