import { apiClient } from "./api-client";

export async function SendToVerifyEmailPage(values) {
  try {
    let options = {
      url: "/auth/verifyResetCode",
      method: "POST",
      data: values,
    };

    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error
  }
}
