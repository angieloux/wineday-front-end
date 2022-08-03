import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getProduct } from "../../../services/productServices";
import Layout from "../../shared/Layout";
import "./product.styles.scss";

const SingleProduct = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((product) => setProduct(product))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !product) {
    return null;
  }

  const {
    title,
    variety,
    description,
    price,
    winery,
    province,
    region,
    country,
    points,
  } = product;
  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src="/" alt={title} />
        </div>

        <div className="product-details">
          <div className="product-name-and-price">
            <h1>{title}</h1>
            <p>{price}</p>
          </div>

          <div className="add-to-cart-btns">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
            >
              ADD TO CART
            </button>

            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="product-description">
            <h3>{variety}</h3>
            <h4>Points: {points}</h4>
            <p>{description}</p>
            <p>
              📍 {winery}, {province}, {region}, {country}.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
