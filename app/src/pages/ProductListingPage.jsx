import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

function ProductList(props) {
  return (
    <ul>
      {props.products.map((p) => (
        <li key={p.id}>
          <Link to={`/store/dp/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function ProductListingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <hr />

      <ProductList products={products} />
    </div>
  );
}
