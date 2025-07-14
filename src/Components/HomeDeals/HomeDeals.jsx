
import { useContext } from "react";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../Context/Product.context";

export default function HomeDeals() {
  let { productsFeatured, loading } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  let deals =
    productsFeatured?.filter((Product) => Product.priceAfterDiscount).slice(0, 5) ||
    [];

  return (
    <>
      <section className="py-8 ">
        <div className="container space-y-4">
          <div className="top section ">
            <div>
              <h3 className="text-2xl font-bold mb-2 capitalize">
                Deals of the Day
              </h3>
              <div className="flex space-x-2">
                <span className="text-gray-500">Offers end in</span>
                <span className="font-bold">:</span>
                <span className="size-6 bg-gray-900 text-white flex items-center justify-center rounded-lg">
                  12
                </span>
                <span className="font-bold">:</span>
                <span className="size-6 bg-gray-900 text-white flex items-center justify-center rounded-lg">
                  12
                </span>
                <span className="font-bold">:</span>
                <span className="size-6 bg-gray-900 text-white flex items-center justify-center rounded-lg">
                  12
                </span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 gap-5">
            {deals.map((product) => (
              <ProductCard key={product._id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
