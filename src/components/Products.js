import React from "react";
import {Product} from "./Product"

const Products = (props) => {
    const {loading, products} = props;
    return(
        <div>
            {loading ? (<p>Loading</p>) 
            :
            (
                <div>
                {products.map(product => (<Product key={product.id} product={product}/>))}
                </div>
            )
            }
        </div>
    )
}

export default Products