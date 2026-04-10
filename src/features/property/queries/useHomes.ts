import { useQuery } from "@tanstack/react-query";

import { getHomes } from "@/src/features/property/api/property.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useHomes(filters?: Record<string, unknown>) {
  return useQuery({
    queryKey: queryKeys.property.list(filters),
    queryFn: () => getHomes(filters),
  });
}
