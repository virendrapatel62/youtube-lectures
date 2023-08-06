import React, { useEffect } from "react";
import { useProductsStore } from "../stores/useProductsStore";
import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const store = useProductsStore();
  const product = store.product;

  const { id } = useParams();

  useEffect(() => {
    store.loadProductById(id);
  }, [id]);

  return (
    <div>
      <h1>ID : {id}</h1>

      <Link to={"/store"}>Back to Store</Link>
      <hr />
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
