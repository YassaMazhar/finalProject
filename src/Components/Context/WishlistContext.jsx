import React, { createContext, useEffect, useState } from "react";
import {
  addProductToWishlist,
  getLoggedToWishlist,
  removeItemFromWishlist,
} from "../../services/wishlist-services";
import toast from "react-hot-toast";

export let WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  let [wishlistInfo, setWishlistInfo] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  // ^ add product
  async function handleAddProductToWishlist({id}) {
    try {
      let response = await addProductToWishlist({id});
      if (response.success) {
        toast.success(response.data.message);
        setWishlistInfo(response.data.data);
      }
    } catch (error) {
      toast.error("Try again");
    }
  }

  // ^ display products
  async function handleLoggedWishlist() {
    try {
      setIsLoading(true);
      let response = await getLoggedToWishlist();
      if (response.success) {
        setIsLoading(false);
        setWishlistInfo(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);

    }
  }
  // ^ remove product
  async function handleRemoveItemFromWishlist({id}) {
    try {
      let response = await removeItemFromWishlist({id});
      if (response.success) {
        setWishlistInfo(response.data.data);
        toast.success(response.data.message);
         handleLoggedWishlist()
      }
    } catch (error) {
      console.log(error);
    }
  }
// useEffect(()=>{
//     handleLoggedWishlist()
// } , [])

  return (
    <>
      <WishlistContext.Provider
        value={{
          handleAddProductToWishlist,
          handleLoggedWishlist,
          wishlistInfo,
          isLoading,
          handleRemoveItemFromWishlist,
        }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
}
