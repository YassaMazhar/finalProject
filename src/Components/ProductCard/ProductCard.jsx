import { faEye, faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import {
  faCodeCompare,
  faPlus,
  faHeart as solid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { desc } from "../../utils/priceDesc";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartProvider";
import { WishlistContext } from "../Context/WishlistContext";

export default function CardDeals({ productInfo }) {
  let {
    id,
    imageCover,
    category,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
    title,
  } = productInfo;

  let { handelAddToCart } = useContext(CartContext);
  let { handleAddProductToWishlist } = useContext(WishlistContext);

  let [toggle, setToggle] = useState( 0);

  function handleIcon() {
    setToggle((toggle + 1));

  }

  return (
    <>
      <div className="card relative bg-white rounded-lg shadow-xl hover:shadow-2xl ">
        <Link to={`/product/${id}`} className=" mx-auto block">
          <img src={imageCover} alt="" className=" h-52 mx-auto" />
        </Link>
        <div className="content p-3 space-y-1">
          <span className="text-gray-500 ">{category.name}</span>
          <h3 className="text-md font-bold *:line-clamp-2">
            <Link to={`/product/${id}`}>{title}</Link>
          </h3>
          <div className="flex space-x-1 items-center">
            <div className="rating text-yellow-400">
              <Rating rating={ratingsAverage} />
            </div>
            <span className="mx-2">{ratingsAverage}</span>
            <span>({ratingsQuantity})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="text-primary-400 font-bold">
                {priceAfterDiscount ? priceAfterDiscount : price} EGP
              </span>
              {priceAfterDiscount && <del>{price} EGP</del>}
            </div>
            <div>
              <button
                className="bg-primary-400 hover:bg-primary-600 text-white flex items-center justify-center size-8 rounded-full"
                onClick={() => {
                  handelAddToCart({ id });
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
        {priceAfterDiscount && (
          <div className=" absolute top-3 left-3 bg-red-500 px-3 py-1 rounded-lg text-sm text-white">
            <span>-{desc(price, priceAfterDiscount).toFixed(0)}%</span>
          </div>
        )}
        <div className=" *:cursor-pointer absolute top-5 right-5 flex  flex-col items-center gap-4 *:hover:text-primary-400 bg-gray-200 py-4 px-2 rounded-lg ">
          <button
            onClick={() => {
              handleAddProductToWishlist({id}), handleIcon(id);
            }}
          >
            {toggle % 2 != 0 ? (
              <FontAwesomeIcon icon={solid} />
            ) : (
              <FontAwesomeIcon icon={regular} />
            )}
          </button>
          <FontAwesomeIcon icon={faCodeCompare} />
          <Link to={`/product/${id}`}>
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
    </>
  );
}
