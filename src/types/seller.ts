export type SellerApplication = {
  id: number;
  sellerId: number;
  progress: number;
  status: "pending" | "in_progress" | "completed";
};
