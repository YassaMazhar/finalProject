import { createContext, useEffect, useState } from "react";
import { sendDataToHomeCategory } from "../../services/Category-services";

export let CategoriesContext = createContext(null);

export default function CategoriesProvider({ children }) {

  let [categories, setCategories] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  async function getAllCategories() {
    try {
      setIsLoading(true);
      let response = await sendDataToHomeCategory();
      if (response.success) {
        setIsLoading(false);
        setCategories(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
      getAllCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
}
