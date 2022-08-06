import React, { useEffect } from "react";
import { useGlobalState } from "../../../context/globalContext";
import { getProducts } from "../../../services/productServices";
import Layout from "../../shared/Layout";
import ProductPreview from "../product-preview/ProductPreview";
import "./products.styles.scss";

const AllProducts = () => {
  const { globalStore, globalDispatch } = useGlobalState();
  const { products } = globalStore;
  const allProducts = products.map((product) => (
    <ProductPreview {...product} key={product.id} />
  ));

  useEffect(() => {
    getProducts()
      .then((products) => {
        globalDispatch({ type: `setProducts`, data: products });
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <div className="products-list-container">
        <div className="products-list-title">Browse our cellar</div>
        <div className="products-list">{allProducts}</div>
      </div>
    </Layout>
  );
};

export default AllProducts;
