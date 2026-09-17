import { CategoryKey } from "@/components/courses/types";

export const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All courses" },
  { key: "web3", label: "Web3 & blockchain" },
  { key: "dev-design", label: "Development & design" },
  { key: "trading", label: "Trading & finance" },
  { key: "data-security", label: "Data & security" },
  { key: "social-media", label: "Social media" },
  { key: "community", label: "Community" },
];
