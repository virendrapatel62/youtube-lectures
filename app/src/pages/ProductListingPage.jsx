import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { create } from "zustand";

function fetchProducts() {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data);
}

const useProductsStore = create((set) => {
  return {
    products: [],
    loading: false,
    loadProducts: async () => {
      set({
        loading: true,
      });
      const products = await fetchProducts();
      set({
        products,
        loading: false,
      });
    },
  };
});

function ProductList(props) {
  const products = useProductsStore((state) => state.products);

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <Link to={`/store/dp/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}

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
