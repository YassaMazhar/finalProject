import { apiClient } from "./api-client"

export async function sendDataToHomeCategory(){
  try {
      let options = {
        url : '/categories',
        method : 'GET',
    }
    let response = await apiClient.request(options)
    return response 
  } catch (error) {
    throw error
  }
}