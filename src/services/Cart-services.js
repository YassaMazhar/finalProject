import { apiClient } from "./api-client";

export async function addProductToCart({ id }) {
  try {
    let options = {
      url: "/cart",
      method: "POST",
      data: {
        productId: id,
      },
    };
    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductToCart() {
  try {
    let options = {
      url: "/cart",
      method: "GET",
    };
    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function removeItemFromCart({ id }) {
  try {
    let options = {
      url: `/cart/${id}`,
      method: "DELETE",
    };

    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
