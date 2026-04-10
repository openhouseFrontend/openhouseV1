import { useMutation, useQueryClient } from "@tanstack/react-query";

import { verifyOtp } from "@/src/features/auth/api/auth.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useVerifyOtp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.auth.currentUser() });
    },
  });
}
