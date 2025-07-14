
import { Link } from "react-router";

import Loading from "../../Components/Loading/Loading";
import { useContext } from "react";
import { CategoriesContext } from "../../Components/Context/Categories.Context";

export default function Categories() {

 let {categories , isLoading} = useContext(CategoriesContext)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container">
          <h2 className="text-3xl font-bold ml-4 py-2">Category</h2>
          <div className="grid grid-cols-2  md:grid-cols-4 xl:grid-cols-6 py-6 gap-3">
            {categories.map((category) => (
              <Link
                to={"/"}
                className="card bg-white text-center py-4 rounded-lg space-y-2 cursor-pointer shadow-md hover:shadow-xl"
              >
                <img
                  className=" size-16 rounded-full mx-auto object-contain"
                  src={category.image}
                  alt=""
                />
                <h4 className=" text-lg font-bold">{category.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
