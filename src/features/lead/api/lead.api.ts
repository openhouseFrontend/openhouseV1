import { apiClient } from "@/src/lib/api-client";

export type SubmitLeadInput = {
  name: string;
  phoneNumber: string;
  source: "contact" | "buy" | "sell" | "channel";
};

export async function submitLead(payload: SubmitLeadInput) {
  return apiClient.post<{ success: boolean }>("/leads/", payload);
}
