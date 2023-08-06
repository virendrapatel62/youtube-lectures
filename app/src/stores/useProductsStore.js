import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchProductById, fetchProducts } from "../services/products";

const storeFunction = (set, get) => {
  return {
    products: [],
    product: null,
    loading: false,
    loadProducts: async () => {
      let products = get().products;

      if (products.length) {
        return get();
      }
      set({
        loading: true,
      });
      products = await fetchProducts();
      set({
        products,
        loading: false,
      });
    },

    loadProductById: async (id) => {
      let product = get().products.find((p) => p.id == id);
      if (!product) {
        product = await fetchProductById(id);
      }
      set({
        product: product,
      });
    },
  };
};

export const useProductsStore = create(devtools(storeFunction));
