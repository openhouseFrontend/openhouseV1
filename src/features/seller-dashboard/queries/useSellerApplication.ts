import { useQuery } from "@tanstack/react-query";

import { getSellerApplication } from "@/src/features/seller-dashboard/api/seller.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useSellerApplication(sellerId?: number | string) {
  return useQuery({
    queryKey: queryKeys.seller.application(sellerId ?? ""),
    queryFn: () => getSellerApplication(sellerId ?? ""),
    enabled: Boolean(sellerId),
  });
}
