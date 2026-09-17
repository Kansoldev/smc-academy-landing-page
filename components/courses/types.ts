export type CategoryKey =
  | "all"
  | "web3"
  | "dev-design"
  | "trading"
  | "data-security"
  | "social-media"
  | "community";

export interface Course {
  id: string;
  title: string;
  category: Exclude<CategoryKey, "all">;
  categoryLabel: string;
  description: string;
  duration: string;
  format: string;
  price?: string;
  available: boolean;
  discounted?: boolean;
}
