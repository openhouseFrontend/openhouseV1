export const queryKeys = {
  auth: {
    currentUser: () => ["auth", "currentUser"] as const,
  },
  property: {
    list: (filters?: Record<string, unknown>) => ["property", "list", filters ?? {}] as const,
    detail: (slug: string) => ["property", "detail", slug] as const,
  },
  seller: {
    application: (sellerId: number | string) => ["seller", "application", sellerId] as const,
  },
} as const;
