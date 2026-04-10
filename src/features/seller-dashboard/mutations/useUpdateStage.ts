import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateSellerStage } from "@/src/features/seller-dashboard/api/seller.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useUpdateStage(sellerId?: number | string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSellerStage,
    onSuccess: () => {
      if (sellerId) {
        void queryClient.invalidateQueries({ queryKey: queryKeys.seller.application(sellerId) });
      }
    },
  });
}
