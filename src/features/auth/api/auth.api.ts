import { apiClient } from "@/src/lib/api-client";
import type { CurrentUser, VerifyOtpResponse } from "@/src/types/auth";

export type SendOtpInput = {
  phoneNumber: string;
};

export type VerifyOtpInput = {
  phoneNumber: string;
  otp: string;
};

export async function getCurrentUser() {
  return apiClient.get<CurrentUser>("/auth/me/");
}

export async function sendOtp(payload: SendOtpInput) {
  return apiClient.post<{ message: string }>("/auth/send-otp/", payload);
}

export async function verifyOtp(payload: VerifyOtpInput) {
  return apiClient.post<VerifyOtpResponse>("/auth/verify-otp/", payload);
}

export async function logout() {
  return apiClient.post<{ success: boolean }>("/auth/logout/");
}
