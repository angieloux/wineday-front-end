import React from "react";
import { Card } from "../styled-components";
import { truncate } from "../utils/stringUtils";

export const ProductPreview = (props) => {
    const {product} = props;
    return(
        <Card>
          <h1>{product.title}</h1>
          <h3>{product.variety}</h3>  
          <p>{truncate(product.description, 100)}</p>
          <p>Points: {product.points}</p>
          <p>Buy now for only ${product.price}</p>
          
        </Card>
    )
}

export default ProductPreview