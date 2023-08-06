import { Link } from "react-router-dom";
import { useProductsStore } from "../stores/useProductsStore";

export default function ProductList() {
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
