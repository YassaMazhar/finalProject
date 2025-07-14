import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

export default function CartItem({ ProductInfo }) {
  let {  count, price, product } = ProductInfo;
  let { id, category, title, imageCover } = product;


  let {handleRemoveProductFromCart} = useContext(CartContext)
  return (
    <>
      <div className="flex items-center justify-between px-2 pt-7">
        <div className="flex items-center gap-3 ">
          <div>
            <img
              className="size-20 rounded-md object-contain"
              src={imageCover}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <h3 className="font-bold capitalize text-md md:text-lg line-clamp-2">{title}</h3>
            <p className="font-semibold text-gray-500 capitalize">
              {category?.name}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400 text-sm">
                <Rating rating={product.ratingsAverage} />
              </div>
              <span className="text-xs text-gray-500">
                ({product.ratingsAverage})
              </span>
            </div>
          </div>
        </div>

        <div className="space-x-5 flex items-center ">
          <div className="space-x-2 flex items-center">
            {/* <button className="bg-primary-400 hover:bg-primary-600 text-sm text-white size-6 rounded-md">
              <FontAwesomeIcon icon={faPlus} />
            </button> */}
            <span className="text-lg font-semibold">{count}</span>
            {/* <button className="bg-primary-400 hover:bg-primary-600 text-sm text-white size-6 rounded-md">
              <FontAwesomeIcon icon={faMinus} />
            </button> */}
          </div>
          <div>
            <span className="font-bold">{price} EGP</span>
          </div>
          <button className="text-red-500"
            onClick={()=>{
              handleRemoveProductFromCart({id})
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
}
