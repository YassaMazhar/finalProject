import { apiClient } from "./api-client";

export async function SendToForgetPasswordPage(values) {
  try {
    let options = {
      url: "/auth/forgotPasswords",
      method: "POST",
      data: values,
    };

    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error
  }
}
