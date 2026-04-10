import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout } from "@/src/features/auth/api/auth.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      void queryClient.removeQueries({ queryKey: queryKeys.auth.currentUser() });
    },
  });
}
