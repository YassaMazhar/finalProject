import { useEffect, useState } from "react";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import { fetchOneProductById } from "../../services/Product-services";
import { useParams } from "react-router";
import Loading from "../../Components/Loading/Loading";


export default function ProductDetails() {
  let [specificProduct, setSpecificProduct] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  async function getDataOneProduct() {
    try {
      setIsLoading(true);
      let response = await fetchOneProductById(id);
      if (response.success) {
        setSpecificProduct(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    getDataOneProduct();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-gray-100/50 py-2 mt-2 ">
        <ProductInfo ProductInfo={specificProduct} />
      </div>
    </>
  );
}
