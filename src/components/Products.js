import React from "react";
import {ProductPreview} from "./ProductPreview"
import { CardDeck } from "../styled-components";
import { useGlobalState } from "../context/globalState";
import { getProducts } from "../services/productServices";

const Products = (props) => {
    const loading = false
    const {store} = useGlobalState();
    const {products} = store
    
console.log(getProducts())
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