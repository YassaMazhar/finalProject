import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import  { CartContext } from "../Context/CartProvider";

export default function CardWishlist({ productInfo }) {
    
    let { id, imageCover, price, title } = productInfo;
  let { handleRemoveItemFromWishlist } = useContext(WishlistContext);
  let {handelAddToCart} = useContext(CartContext)

 

  return (
    <>
      <div className=" flex items-center justify-between py-3 px-3 border-b border-gray-300/50">
        <div className="flex items-center ">
          <div className="">
            <img className="size-24 lg:size-44 object-contain" src={imageCover} alt="" />
          </div>
          <div className="space-y-2">
            <h3 className="w-[200px] md:text-xl font-medium md:font-bold">{title}</h3>
            <span className="text-primary-500 font-bold">{price} EGP</span>
            <button
              className="text-red-800 flex items-center gap-1"
              onClick={() => handleRemoveItemFromWishlist({id})}
            >
              <FontAwesomeIcon icon={faTrash} />
              Remove
            </button>
          </div>
        </div>
        <div>
          <button className="text-black border border-primary-400  p-2 md:px-4 md:py-3 rounded-lg cursor-pointer hover:bg-primary-300 transition-all duration-200"
            onClick={()=> handelAddToCart({id})}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
