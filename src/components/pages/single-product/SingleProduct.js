import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getProduct } from "../../../services/productServices";
import Layout from "../../shared/Layout";
import "./product.styles.scss";
import image from "../../../assets/product.jpg";
import { inCart } from "../../../utils/helpers";
import { CartContext } from "../../../context/cartContext";
import { useGlobalState } from "../../../context/globalContext";
import { formatPrice } from "../../../utils/stringUtils";

const SingleProduct = (props) => {
  const { id } = useParams();
  const { globalStore, globalDispatch } = useGlobalState();
  const { username, product } = globalStore;
  const [loading, setLoading] = useState(false);
  const { cartItems, addItem, addMore } = useContext(CartContext);
  const navigate = useNavigate();

  const itemInCart = inCart(product, cartItems);

  useEffect(() => {
    setLoading(true);
    getProduct(id)
      .then((product) => {
        globalDispatch({ type: `setProduct`, data: product });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [id, globalDispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (!loading && !product) {
  //   return <p>NAH</p>;
  // }
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
      {loading && <h2>Loading...</h2>}

      {!loading && product && (
        <div className="single-product-container">
          <div className="product-image">
            <img src={image} alt={title} />
          </div>

          <div className="product-details">
            <div className="product-name-and-price">
              <h1>{title}</h1>
              <p>{formatPrice(price)}</p>
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
      )}
      {!loading && !product && <p>Can't find that wine</p>}
    </Layout>
  );
};

export default SingleProduct;
