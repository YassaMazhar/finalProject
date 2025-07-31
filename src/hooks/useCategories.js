import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { sendDataToHomeCategory } from '../services/Category-services'

export default function useCategories() {
  let {data , isLoading} =  useQuery({
        queryKey : ["categories"],
        queryFn : sendDataToHomeCategory
    })



  return {
    categories:data?.data.data,
    isLoading
  }
}
