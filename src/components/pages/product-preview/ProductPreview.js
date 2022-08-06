import React, { useContext } from "react";
import "./product-preview.styles.scss";
import { formatPrice, truncate } from "../../../utils/stringUtils";
import image from "../../../assets/product.jpg";
import { CartContext } from "../../../context/cartContext";
import { inCart } from "../../../utils/helpers";
import { useNavigate } from "react-router";

const ProductPreview = (props) => {
  const { id, title, price, points, variety, description } = props;
  const navigate = useNavigate();
  const product = { title, price, points, variety, description, id };
  const { addItem, cartItems, addMore } = useContext(CartContext);
  const itemInCart = inCart(product, cartItems);

  return (
    <div className="product-preview">
      <div
        className="product-image"
        onClick={() => navigate(`/products/${id}`)}
      >
        <img src={image} alt={title} />
      </div>
      <div className="product-short-info">
        <h3>{title}</h3>
        <p>{formatPrice(price)}</p>
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
