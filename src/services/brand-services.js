import { apiClient } from "./api-client";

export async function sendDataToBrandPage() {
  try {
    let options = {
      url: "/brands",
      method: "GET",
    };
    let response = await apiClient.request(options);
    return response
  } catch (error) {
    throw error
  }
}

