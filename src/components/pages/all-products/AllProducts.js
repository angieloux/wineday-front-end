import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGlobalState } from "../../../context/globalContext";
import { getProducts } from "../../../services/productServices";
import { normalizeStr } from "../../../utils/stringUtils";
import Layout from "../../shared/Layout";
import ProductPreview from "../product-preview/ProductPreview";
import "./products.styles.scss";
import { Heading } from "react-bulma-components";

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
            const formattedSearch = normalizeStr(search.toLowerCase());

            return (
              normalizeStr(product.title.toLowerCase()).includes(
                formattedSearch
              ) ||
              normalizeStr(product.variety.toLowerCase()).includes(
                formattedSearch
              ) ||
              normalizeStr(product.description.toLowerCase()).includes(
                formattedSearch
              ) ||
              normalizeStr(product.region.toLowerCase()).includes(
                formattedSearch
              ) ||
              normalizeStr(product.country.toLowerCase()).includes(
                formattedSearch
              )
            );
          });
        }
        globalDispatch({ type: `setProducts`, data: products });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [searchParams, globalDispatch]);

  return (
    <Layout>
      {loading && <Heading align="center">Finding wines...</Heading>}

      <div className="form-container">
        <form className="search-form">
          <div className="control">
            <input
              name="q"
              type="input"
              placeholder="Search..."
              className="nomad-btn submit is-black"
            ></input>
          </div>

          <button
            className="button is-black button nomad-btn submit"
            type="submit"
          >
            ????
          </button>
        </form>
      </div>
      <div className="products-list-container">
        {!loading && products.length > 0 && (
          <div className="products-list">{allProducts}</div>
        )}
        {products.length === 0 && !loading && (
          <p align="center">
            Oops, nothing found. Try searching for something else.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
