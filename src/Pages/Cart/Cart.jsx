import { useContext, useEffect } from "react";
import CartItem from "../../Components/CartItem/CartItem";
import { CartContext } from "../../Components/Context/CartProvider";
import { Link } from "react-router";
import CartSkeleton from "./../../Components/Skeleton/CartSkeleton";
import MetadataPage from "../../Components/MetadataPage/MetadataPage";

export default function Cart() {
  let { handleGetProductToCart, cartInfo, isLoading } = useContext(CartContext);

  useEffect(() => {
    try {
      handleGetProductToCart();
      
    } catch (error) {
            handleGetProductToCart();

    }
  }, []);

  if (isLoading) {
    return <CartSkeleton />;
  }
  if (!cartInfo || !cartInfo.data || !cartInfo.data.products) {
    return (
      <div className="text-center py-10 text-red-600">
        Cart is empty or failed to load. Please try again later.
      </div>
    );
  }
  let { data, numOfCartItems } = cartInfo;
  let { products, totalCartPrice } = data;

  return (
    <>
      <MetadataPage title="Cart Page" description="Manage your cart items" />
      <section className="py-8  ">
        <div className="container grid md:grid-cols-3 gap-4 ">
          {/* left */}
          <div className=" md:col-span-2 border border-gray-400/20 rounded-md p-5 shadow-lg">
            <div className=" border-b border-gray-400/50 py-3">
              <h3 className="text-xl font-bold capitalize">Shopping Cart</h3>

              <span className="text-gray-500">
                {cartInfo?.numOfCartItems} items in cart
              </span>
            </div>
            <div>
              {products?.map((product) => (
                <CartItem key={product._id} ProductInfo={product} />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="space-y-4 border border-gray-400/20 px-5 py-8 ">
            <h3 className="text-xl font-bold capitalize">Order Summary</h3>
            <div className="flex items-center justify-between *:text-gray-400 *:capitalize">
              <span>Subtotal ({numOfCartItems} items) </span>
              <span>{totalCartPrice} EGP</span>
            </div>
            <div className="flex items-center justify-between *:text-gray-400 *:capitalize">
              <span>Shopping</span>
              <span>{products.length > 0 ? 70 : 0} EGP</span>
            </div>
            <div className="flex items-center justify-between *:text-gray-400 *:capitalize">
              <span>Tax</span>
              <span>{(totalCartPrice * 0.14).toFixed(2)} EGP</span>
            </div>
            <div className="flex items-center justify-between *:font-bold border-t border-gray-400/50 pt-3 *:capitalize">
              <span>total</span>
              <span>
                {(
                  totalCartPrice +
                  (products.length > 0 ? 70 : 0) +
                  totalCartPrice * 0.14
                ).toFixed(2)}{" "}
                EGP
              </span>
            </div>
            <Link
              to={"/checkout"}
              className="bg-primary-500 hover:bg-primary-700 my-3 text-white w-full text-center rounded-md p-2"
            >
              Protected to checkout
            </Link>
            <Link
              to={"/home"}
              className="bg-gray-200 hover:bg-gray-300 my-2 text-black w-full text-center rounded-md p-2"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
