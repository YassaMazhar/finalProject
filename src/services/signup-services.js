import { apiClient } from "./api-client";

export async function sendDataToSignup(values) {
  try {
    let options = {
      method: "POST",
      url: "/auth/signup",
      data: values,
    }
    let response = await apiClient.request(options);
    return response;
  } 
  catch (error) {
    throw error.message 
  }

}
