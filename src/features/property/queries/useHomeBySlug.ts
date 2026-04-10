import { useQuery } from "@tanstack/react-query";

import { getHomeBySlug } from "@/src/features/property/api/property.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useHomeBySlug(slug?: string) {
  return useQuery({
    queryKey: queryKeys.property.detail(slug ?? ""),
    queryFn: () => getHomeBySlug(slug ?? ""),
    enabled: Boolean(slug),
  });
}
