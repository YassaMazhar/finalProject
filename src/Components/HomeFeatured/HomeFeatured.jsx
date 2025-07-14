import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/Product-services";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";

export default function HomeFeatured() {
  let [productsFeatured, setProductsFeatured] = useState(null);
  let [loading, setLoading] = useState(true);

  async function getAllProducts() {
    try {
      setLoading(true);
      let response = await fetchAllProducts();
      if (response.success) {
        setLoading(false);
        setProductsFeatured(response.data.data);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  if(loading){
    return <Loading/>
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
