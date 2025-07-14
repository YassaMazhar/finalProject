import { apiClient } from "./api-client";

export async function sendDataToResetPasswordPage(values) {
  try {
    let options = {
      url: "/auth/resetPassword",
      method: "PUT",
      data: values,
    };
    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
