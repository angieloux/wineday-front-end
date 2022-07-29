import React, { useEffect, useState } from "react";
import {ProductPreview} from "./ProductPreview"
import { CardDeck } from "../styled-components";
import { useGlobalState } from "../config/store";
import { getProducts } from "../services/productServices";

const Products = (props) => {
    const [loading, setLoading] = useState(true)
    const {store, dispatch} = useGlobalState();
    const {products} = store

    useEffect(() => {
        getProducts()
        .then(products => {
          dispatch({type: `setProducts`, data: products})})
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
      },[]) 
    
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