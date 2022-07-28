import React from "react";
import {ProductPreview} from "./ProductPreview"
import { CardDeck } from "../styled-components";

const Products = (props) => {
    const {loading, products} = props;
    return(
        <div>
            {loading ? (<p>Loading</p>) 
            :
            (
                <CardDeck>
                {products.sort((a, b) => b.price - a.price).map(product => (<ProductPreview key={product.id} product={product}/>))}
                </CardDeck>
            )
            }
        </div>
    )
}

export default Products