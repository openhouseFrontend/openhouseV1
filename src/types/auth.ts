export type UserRole =
  | "buyer"
  | "broker"
  | "sales"
  | "seller"
  | "seller_admin"
  | "admin"
  | "legal"
  | "supply"
  | "project"
  | "marketing";

export type CurrentUser = {
  id: string;
  name: string;
  phoneNumber?: string;
  role: UserRole;
};

export type VerifyOtpResponse = {
  accessToken: string;
  user: CurrentUser;
};
