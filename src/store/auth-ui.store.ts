import { create } from "zustand";

type AuthUiState = {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  otpRequestInFlight: boolean;
  setOtpRequestInFlight: (value: boolean) => void;
};

export const useAuthUiStore = create<AuthUiState>((set) => ({
  phoneNumber: "",
  setPhoneNumber: (value) => set({ phoneNumber: value }),
  otpRequestInFlight: false,
  setOtpRequestInFlight: (value) => set({ otpRequestInFlight: value }),
}));
