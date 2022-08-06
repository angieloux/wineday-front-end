import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGlobalState } from "../../../context/globalContext";
import { getProducts } from "../../../services/productServices";
import Layout from "../../shared/Layout";
import ProductPreview from "../product-preview/ProductPreview";
import "./products.styles.scss";

const AllProducts = () => {
  const { globalStore, globalDispatch } = useGlobalState();
  const { products } = globalStore;
  const [loading, setLoading] = useState(false);
  const allProducts = products.map((product) => (
    <ProductPreview {...product} key={product.id} />
  ));
  let [searchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);

    const search = searchParams.get("q");
    getProducts()
      .then((products) => {
        if (search) {
          products = products.filter((product) => {
            const lowerCaseSearch = search.toLowerCase();
            return (
              product.title.toLowerCase().includes(lowerCaseSearch) ||
              product.description.toLowerCase().includes(lowerCaseSearch) ||
              product.variety.toLowerCase().includes(lowerCaseSearch)
            );
          });
        }
        globalDispatch({ type: `setProducts`, data: products });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [globalDispatch, searchParams]);
  return (
    <Layout>
      <div className="products-list-container">
        {loading && <div className="products-list-title">Loading wines...</div>}
        {!loading && (
          <>
            <div className="products-list-title">Browse our cellar</div>
            <div className="products-list">{allProducts}</div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
