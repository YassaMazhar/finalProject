import { useContext, useEffect } from "react";

import CardWishlist from "../../Components/CardWishlist/CardWishlist";
import Loading from "../../Components/Loading/Loading";
import { WishlistContext } from "../../Components/Context/WishlistContext";

export default function Wishlist() {
  let { handleLoggedWishlist, wishlistInfo, isLoading } =
    useContext(WishlistContext);

  useEffect(() => {
    handleLoggedWishlist();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="my-16">
        <div className="container bg-gray-100/50 px-2 lg:px-12 py-2 lg:py-8">
          <div className="pl-4 py-4">
            <h2 className="text-4xl font-black ">My wish List</h2>
          </div>
          <div>
            {
              wishlistInfo?.map((item) => (
                <CardWishlist key={item.id} productInfo={item} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
