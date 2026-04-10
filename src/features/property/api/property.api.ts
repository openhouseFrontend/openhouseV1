import { apiClient } from "@/src/lib/api-client";
import type { PaginatedResponse } from "@/src/types/api";
import type { PropertyCard, PropertyDetail } from "@/src/types/property";

export async function getHomes(filters?: Record<string, unknown>) {
  const params = new URLSearchParams();

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && `${value}`.trim() !== "") {
        params.set(key, String(value));
      }
    });
  }

  const query = params.toString();
  const path = query ? `/homes/?${query}` : "/homes/";
  return apiClient.get<PaginatedResponse<PropertyCard>>(path);
}

export async function getHomeBySlug(slug: string) {
  return apiClient.get<PropertyDetail>(`/homes/${slug}/`);
}
