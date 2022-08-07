import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { getProduct } from "../../../services/productServices";
import Layout from "../../shared/Layout";
// import "./product.styles.scss";
// import image from "../../../assets/product.jpg";
// import { useGlobalState } from "../../../context/globalContext";
import { getOrder } from "../../../services/orderServices";

const OrderConfirmation = (props) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id)
      .then((order) => setOrder(order))
      .catch((err) => console.error(err))
      .finally(setLoading(false));
  }, [id]);

  if (loading) {
    return <p align="center">Loading...</p>;
  }

  if (!loading && !order) {
    return null;
  }

  const { total, number } = order;
  return (
    <Layout>
      <div className="single-product-container">
        {/* <div className="product-image">
          <img src={image} alt={title} />
        </div> */}

        <div className="product-details">
          <div className="product-name-and-price">
            <h1>{total}</h1>
            <p>oaisjfaoisjf</p>
            <p>{number}</p>
          </div>
          {/*           
          <div className="product-description">
            <h3>{variety}</h3>
            <h4>Points: {points}</h4>
            <p>{description}</p>
            <p>
              📍 {winery}, {province}, {region}, {country}.
            </p>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
