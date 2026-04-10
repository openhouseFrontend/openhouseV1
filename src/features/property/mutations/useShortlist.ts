import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/src/lib/api-client";

type ShortlistInput = {
  homeId: string;
};

async function shortlistHome(payload: ShortlistInput) {
  return apiClient.post("/homes/shortlist/", payload);
}

export function useShortlist() {
  return useMutation({
    mutationFn: shortlistHome,
  });
}
