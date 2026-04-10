import { useMutation } from "@tanstack/react-query";

import { sendOtp } from "@/src/features/auth/api/auth.api";

export function useSendOtp() {
  return useMutation({
    mutationFn: sendOtp,
  });
}
