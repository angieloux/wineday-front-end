import React from "react";

const Products = (props) => {
    const {loading, products} = props;
    return(
        <div>
            {loading ? (<p>Loading</p>) 
            :
            <h1>Got the blog posts</h1> }
        </div>
    )
}

export default Products