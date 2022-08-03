import React from 'react';
import './product-preview.styles.scss';
import { truncate } from "../../../utils/stringUtils";

const ProductPreview = (product) => {
    const {title, imageUrl, price, points, variety, description} = product;


return (
    <div className="product-preview">
        <div className="product-image">
            <img src={imageUrl} alt="product" />
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

}

export default ProductPreview;