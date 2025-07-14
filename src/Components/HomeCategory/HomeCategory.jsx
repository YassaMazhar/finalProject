import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { sendDataToHomeCategory } from "../../services/Category-services.js";

export default function HomeCategory() {
  let [homeCategoryData, setHomeCategoryData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  async function getHomeCategoryData() {
    try {
      setIsLoading(true);
      let response = await sendDataToHomeCategory();
      setIsLoading(false);
      setHomeCategoryData(response.data.data);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  }

  useEffect(() => {
    getHomeCategoryData();
  }, []);

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
            {homeCategoryData.map((category) => (
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
