import React from "react";
import "./product-preview.styles.scss";
import { truncate } from "../../../utils/stringUtils";
import image from "../../../assets/product.jpg";
import { useNavigate } from "react-router";

const ProductPreview = (product) => {
  const { id, title, price, points, variety, description } = product;
  const navigate = useNavigate();

  return (
    <div className="product-preview">
      <div className="product-image" onClick={() => navigate(`./${id}`)}>
        <img src={image} alt="product" />
      </div>
      <div className="product-short-info">
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{truncate(description, 100)}</p>
        <p>{variety}</p>
        <p>Score: {points}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductPreview;
