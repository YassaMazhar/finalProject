import Rating from "../Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRotateLeft,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { desc } from "../../utils/priceDesc";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import { CartContext } from "../Context/CartProvider";
import { useContext } from "react";

export default function ProductInfo({ ProductInfo }) {
  let {
    id,
    title,
    price,
    priceAfterDiscount,
    description,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    images,
  } = ProductInfo;

   let {handelAddToCart} = useContext(CartContext)

  return (
    <>
      <section className="py-5 ">
        <div className="container">
          <div className="grid items-center lg:grid-cols-3 gap-8">
            {/* left section */}
            <div className="w-72 mx-auto bg-white">
              <ReactImageGallery
                showPlayButton={false}
                showNav={false}

                items={images.map((image) => {
                  return {
                    original: image,
                    thumbnail: image,
                  };
                })}
              />
            </div>

            {/* right section */}
            <div className="bg-white col-span-2 p-5 space-y-5">
              <div className="space-y-3 border-b border-gray-500/20 pb-5">
                <span className="bg-primary-200 text-primary-600 px-2 py-1 rounded-md ">
                  {quantity ? "In Stock" : "out of stock"}
                </span>
                <h2 className="text-2xl font-black">{title}</h2>
                <div className="flex items-center gap-3">
                  <div className="text-yellow-300">
                    <Rating rating={ratingsAverage} />
                  </div>
                  <div className="flex gap-1 *:text-gray-500">
                    <span>{ratingsAverage}</span>
                    <span>({ratingsQuantity})</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {priceAfterDiscount ? (
                    <>
                      <span className="text-2xl font-black">
                        ${priceAfterDiscount}
                      </span>
                      <del className="text-gray-500">${price}</del>
                      <span className="bg-red-200 text-red-700 px-1 rounded-md ">
                        {desc(price, priceAfterDiscount).toFixed(0)}%
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl font-black">${price}</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-gray-500">{description}</p>

              <div className="flex items-center gap-3 pt-2 *:flex *:grow *:border *:border-gray-400/50 *:justify-center *:p-2 *:rounded-lg border-b border-gray-500/20 py-5">
                <button className="gap-2 bg-primary-600 text-white items-center"
                  onClick={()=>{handelAddToCart({id})}}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>Add to Car</span>
                </button>
                <button className="hover:bg-primary-600 hover:text-white transition-all duration-300">
                  Buy Now
                </button>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <div className="flex items-center gap-3 border border-gray-500/20 grow-1 justify-center rounded-lg p-2 ">
                  <div className="size-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </div>
                  <div>
                    <h4 className="font-bold">Free Delivery</h4>
                    <span className="text-gray-500">
                      Free shipping on orders over $50
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-gray-500/20 grow-1 justify-center rounded-lg p-2 ">
                  <div className="size-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={faRotateLeft} />
                  </div>
                  <div>
                    <h4 className="font-bold">30 Days Return</h4>
                    <span className="text-gray-500">
                      Satisfaction guaranteed or money back
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
