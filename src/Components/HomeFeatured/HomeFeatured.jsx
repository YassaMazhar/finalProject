import { useContext} from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../Context/Product.context";
import HomeFeaturesSkeleton from "../Skeleton/HomeFeaturesSkeleton";

export default function HomeFeatured() {
  let {productsFeatured , loading} = useContext(ProductContext)

  if(loading){
    return <HomeFeaturesSkeleton/>
  }
  return (
    <>
      <section className="py-8">
        <div className="container space-y-4">
          <div>
            <h3 className="text-2xl font-bold capitalize ">featured products</h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 gap-5">
            {productsFeatured?.map((product) => (
              
              <ProductCard key={product._id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
