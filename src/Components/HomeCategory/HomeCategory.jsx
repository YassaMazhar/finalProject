import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { CategoriesContext } from "../Context/Categories.Context.jsx";

export default function HomeCategory() {
  let { categories, isLoading } = useContext(CategoriesContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="py-8">
        <div className="container">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Shope bg Category</h2>
            <Link
              to={"/categories"}
              className="text-primary-400 flex items-center gap-2"
            >
              <span>View All categories</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="grid grid-cols-2  md:grid-cols-4 xl:grid-cols-6 py-6 gap-3">
            {categories?.map((category) => (
              <Link
                key={category._id}
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
