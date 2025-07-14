import { apiClient } from "./api-client"

export async function fetchAllProducts(){
  try {
      let options ={
        url : '/products',
        method : 'GET'
    }
    let response = await apiClient.request(options)
    return response 
  } catch (error) {
    throw error
  }

}


export async function fetchOneProductById(id){
  try {
      let options ={
        url : `/products/${id}`,
        method : 'GET'
    }
    let response = await apiClient.request(options)
    return response 
  } catch (error) {
    throw error
  }

}