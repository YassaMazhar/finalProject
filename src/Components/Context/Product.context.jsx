import { createContext, useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/Product-services";

export let ProductContext = createContext(null);

export default function ProductsProvider({ children }) {
  let [productsFeatured, setProductsFeatured] = useState(null);
  let [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      setLoading(true);
      let response = await fetchAllProducts();
      if (response.success) {
        setLoading(false);
        setProductsFeatured(response.data.data);
      }
    } catch (error) {
      setLoading(false);
    }
  }
    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <ProductContext.Provider value={{productsFeatured , loading}}>{children}</ProductContext.Provider>
  );
}
