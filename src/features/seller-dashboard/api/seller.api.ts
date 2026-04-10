import { apiClient } from "@/src/lib/api-client";
import type { SellerApplication } from "@/src/types/seller";

export async function getSellerApplication(sellerId: number | string) {
  return apiClient.get<SellerApplication>(`/sellers/${sellerId}/application/`);
}

export async function updateSellerStage(payload: { stageId: string; status: string }) {
  return apiClient.patch(`/sellers/application/stage/`, payload);
}

export async function uploadSellerDocument(payload: { stageId: string; fileUrl: string }) {
  return apiClient.post(`/sellers/application/document/`, payload);
}
