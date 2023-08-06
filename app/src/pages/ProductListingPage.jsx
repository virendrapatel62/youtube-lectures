import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useProductsStore } from "../stores/useProductsStore";

export default function ProductListingPage() {
  const { loadProducts, loading } = useProductsStore(
    ({ loadProducts, loading }) => {
      return {
        loadProducts,
        loading,
      };
    }
  );
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <hr />

      {loading && <h1>Loading....</h1>}

      <ProductList />
    </div>
  );
}
