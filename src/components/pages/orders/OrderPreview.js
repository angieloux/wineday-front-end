import React from "react";
import "./orders.styles.scss";
import image from "../../../assets/product.jpg";

const OrderPreview = (props) => {
  const { total, id } = props;
  // const order = { number, total, id };

  return (
    <div className="order-item">
      <div className="item-image">
        <img src={image} alt={id} />
      </div>
      <div className="order-number-and-total">
        <h4>Total: ${total}</h4>
        {/* <p>{number}</p> */}
        <p>Order #{id}</p>
      </div>
    </div>
  );
};

export default OrderPreview;
