import React from "react";

export const Product = (props) => {
    const {product} = props;
    return(
        <>
          <h1>{product.title}</h1>
          <h3>{product.variety}</h3>  
          <p>{product.description}</p>
          <p>{product.winery}, {product.province}, {product.region}, {product.country}.</p>
          <p>Points: {product.points}</p>
          <p>Buy now for only ${product.price}</p>
          
        </>
    )
}

export default Product