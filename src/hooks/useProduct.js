import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchAllProducts } from "../services/Product-services";

export default function useProduct() {
  let { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: fetchAllProducts,
  });

  return {
    productsFeatured:data?.data.data,
    isLoading,
  };
}
