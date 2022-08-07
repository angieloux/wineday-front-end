import React, { useContext } from "react";
import "./product-preview.styles.scss";
import { formatPrice, truncate } from "../../../utils/stringUtils";
import image from "../../../assets/product.jpg";
import { CartContext } from "../../../context/cartContext";
import { inCart } from "../../../utils/helpers";
import { useNavigate } from "react-router";
import { Card, Heading } from "react-bulma-components";

const ProductPreview = (props) => {
  const { Image } = Card;
  const { id, title, price, points, variety, description } = props;
  const navigate = useNavigate();
  const product = { title, price, points, variety, description, id };
  const { addItem, cartItems, addMore } = useContext(CartContext);
  const itemInCart = inCart(product, cartItems);

  return (
    <Card className="product-preview">
      <Image
        className="product-image"
        src={image}
        alt={title}
        onClick={() => navigate(`/products/${id}`)}
      ></Image>

      <div className="product-short-info">
        <Heading size={4}>{title}</Heading>

        <Heading subtitle weight="bold">
          <p>{formatPrice(price)}</p>
        </Heading>
        <span>{truncate(description, 70)}</span>
        <p className="bold-text">{variety}</p>
        <p className="score">Score: {points}</p>
      </div>

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
    </Card>
  );
};

export default ProductPreview;
