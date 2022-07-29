import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGlobalState } from "../config/store";
import { getProduct } from "../services/productServices";
import { Card } from "../styled-components";

const Product = (props) => {
    const {store} = useGlobalState()
    const {products} = store;
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        getProduct(id)
        .then(product => setProduct(product))
        .catch(err => console.log(err))
        .finally(setLoading(false))
    },[id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!loading && !product) {
        return <p>No product found</p>
    }


    return(
        <Card>
            <h1>{product.title}</h1>
            <h3>{product.variety}</h3>  
            <p>{product.description}</p>
            <p>{product.winery}, {product.province}, {product.region}, {product.country}.</p>
            <p>Points: {product.points}</p>
            <p>Buy now for only ${product.price}</p>
        </Card>
    )
}

export default Product