import { useMutation } from "@tanstack/react-query";

import { submitLead } from "@/src/features/lead/api/lead.api";

export function useSubmitLead() {
  return useMutation({
    mutationFn: submitLead,
  });
}
