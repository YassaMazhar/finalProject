import { Link } from "react-router";
import useBrand from "../../hooks/useBrand";
import BrandsSkeleton from "../../Components/Skeleton/brandsSkeleton";

export default function Brands() {
let {isBrands , isLoading} = useBrand()
  if (isLoading) {
    return <BrandsSkeleton/>;
  }

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container">
          <h2 className="text-3xl font-bold ml-4 py-2">Brands: </h2>
          <div className="grid grid-cols-2  md:grid-cols-4 xl:grid-cols-6 py-6 gap-3">
            {isBrands?.map((brand) => (
              <Link
                key={brand._id}
                className="bg-white shadow-xl hover:shadow-2xl border border-gray-400/30 p-3 "
              >
                <img
                  className=" size-25 mx-auto object-contain"
                  src={brand.image}
                  alt=""
                />
                <h4 className="text-xl font-bold text-center capitalize mt-2">
                  {brand.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
