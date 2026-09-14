import { EventCategory } from "./types";

export const categories: EventCategory[] = [
  "Blockchain & Web3",
  "Frontend Development",
  "Data Analysis",
  "Forex",
  "Crypto Trading",
  "Graphics Design",
  "Community",
];

export const categoryStyle: Record<EventCategory, string> = {
  "Blockchain & Web3": "bg-[#2F3F8C]/10 text-[#2F3F8C]",
  "Frontend Development": "bg-[#2F3F8C]/10 text-[#2F3F8C]",
  "Data Analysis": "bg-[#2F3F8C]/10 text-[#2F3F8C]",
  Forex: "bg-[#C89B3C]/15 text-[#8A6A1E]",
  "Crypto Trading": "bg-[#C89B3C]/15 text-[#8A6A1E]",
  "Graphics Design": "bg-[#2F7A52]/10 text-[#2F7A52]",
  Community: "bg-[#5B5F6E]/10 text-[#5B5F6E]",
};
