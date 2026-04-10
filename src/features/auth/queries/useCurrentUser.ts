import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "@/src/features/auth/api/auth.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useCurrentUser() {
  return useQuery({
    queryKey: queryKeys.auth.currentUser(),
    queryFn: getCurrentUser,
  });
}
