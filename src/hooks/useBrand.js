import { useQuery } from "@tanstack/react-query";
import React from "react";
import { sendDataToBrandPage } from "../services/brand-services";

export default function useBrand() {
  let { data, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: sendDataToBrandPage,
  });
  return {
    isBrands: data?.data.data,
    isLoading,
  };
}
