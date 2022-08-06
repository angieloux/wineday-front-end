import React from "react";
import "./orders.styles.scss";
import image from "../../../assets/product.jpg";
import { formatPrice, formatDate } from "../../../utils/stringUtils";

const OrderPreview = (props) => {
  const { total, id, created_at } = props;
  // const order = { number, total, id };

  return (
    <div className="order-item">
      <div className="item-image">
        <img src={image} alt={id} />
      </div>
      <div className="order-number-and-total">
        <h4>Order #: {id}</h4>
        <p>Total: {formatPrice(total)}</p>
        <p>Placed: {formatDate(created_at)}</p>
      </div>
    </div>
  );
};

export default OrderPreview;
