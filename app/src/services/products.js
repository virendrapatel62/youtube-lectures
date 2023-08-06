import axios from "axios";

export function fetchProducts() {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data);
}
export function fetchProductById(id) {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.data);
}
