import { apiClient } from "./api-client";

export async function sendDataToLogin(values) {
  try {
    let options = {
      url: "/auth/signin",
      method: "POST",
      data: values,
    };
    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error.message;
  }
}
