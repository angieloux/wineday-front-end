import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getProduct } from "../../../services/productServices";
import Layout from "../../shared/Layout";
import "./product.styles.scss";
import image from "../../../assets/product.jpg";
import { inCart } from "../../../utils/helpers";
import { CartContext } from "../../../context/cartContext";
import { useGlobalState } from "../../../context/globalContext";

const SingleProduct = (props) => {
  const { globalStore } = useGlobalState();
  const { username } = globalStore;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cartItems, addItem, addMore } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const itemInCart = inCart(product, cartItems);

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
          <img src={image} alt={title} />
        </div>

        <div className="product-details">
          <div className="product-name-and-price">
            <h1>{title}</h1>
            <p>{price}</p>
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
          {username ? (
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
              onClick={() => {
                navigate("/cart");
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          ) : (
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              LOGIN TO PURCHASE
            </button>
          )}
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
