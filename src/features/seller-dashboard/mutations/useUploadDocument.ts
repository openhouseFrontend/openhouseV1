import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadSellerDocument } from "@/src/features/seller-dashboard/api/seller.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useUploadDocument(sellerId?: number | string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadSellerDocument,
    onSuccess: () => {
      if (sellerId) {
        void queryClient.invalidateQueries({ queryKey: queryKeys.seller.application(sellerId) });
      }
    },
  });
}
