import { apiClient } from './api-client';

export async function addProductToWishlist({id}){
  try {
      let options = {
        url : '/wishlist',
        method : 'POST',
        data : {
            productId : id
        }
    }
    let response = await apiClient.request(options)
    return response
  } catch (error) {
    throw error 
  }
}

export async function getLoggedToWishlist() {
  try {
    let options = {
      url: "/wishlist",
      method: "GET",
    };
    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function removeItemFromWishlist({id} ) {
  try {
    let options = {
      url: `/wishlist/${id}`,
      method: "DELETE",
    };

    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
