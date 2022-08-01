import React, { useEffect } from "react";
import {ProductPreview} from "./ProductPreview"
import { CardDeck } from "../styled-components";
import { useGlobalState } from "../context/globalContext";
import { getProducts } from "../services/productServices";


const Products = (props) => {
    const loading = false
    const {globalStore, globalDispatch} = useGlobalState();
    const {products} = globalStore
    
    
    useEffect(() => {
        getProducts()
        .then(products => {
          globalDispatch({type: `setProducts`, data: products})})
        .catch(error => console.error(error))
        // eslint-disable-next-line
      },[])

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