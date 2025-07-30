import { createContext,  useEffect, useState } from "react";
import {
  addProductToCart,
  getProductToCart,
  removeItemFromCart,
} from "../../services/Cart-services";
import toast from "react-hot-toast";

export let CartContext = createContext(null);

export default function CartProvider({ children }) {
  let [cartInfo, setCartInfo] = useState(null);
  let [isLoading, setIsLoading] = useState(true);


  // ^ function add to cart
  async function handelAddToCart({ id }) {
    try {
      let response = await addProductToCart({ id });
      if (response.success) {
        toast.success(response.data.message);
        setCartInfo(response.data);
      }
    } catch (error) {

      setIsLoading(false);
    }
  }

  // ^ function display product
  async function handleGetProductToCart() {
    try {
      setIsLoading(true);
      let response = await getProductToCart();
      if (response.success) {
        setCartInfo(response?.data);
        setIsLoading(false);
        
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  // ^ function remove product
  async function handleRemoveProductFromCart({ id }) {
    try {
      let toastId = toast.loading("we are deleting cart item");
      let response = await removeItemFromCart({ id });
      if (response.success) {
        setCartInfo(response.data);
        toast.dismiss(toastId);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleGetProductToCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        handelAddToCart,
        cartInfo,
        isLoading,
        handleGetProductToCart,
        handleRemoveProductFromCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}
