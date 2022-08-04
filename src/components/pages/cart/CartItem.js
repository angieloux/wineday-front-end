import React from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "../../../assets/icons";
import image from "../../../assets/product.jpg";

const CartItem = (props) => {
  const {
    title,
    id,
    description,
    price,
    quantity,
    addMore,
    decrease,
    trashProduct,
  } = props;
  const product = { title, price, quantity, id, description };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-name-and-price">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={() => addMore(product)}>
          <PlusCircleIcon width="20px" />
        </button>

        {quantity === 1 && (
          <button
            className="btn-increase"
            onClick={() => trashProduct(product)}
          >
            <TrashIcon width="20px" />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-trash" onClick={() => decrease(product)}>
            <MinusCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
