export type View = "upcoming" | "past";

export type EventCategory =
  | "Blockchain & Web3"
  | "Frontend Development"
  | "Data Analysis"
  | "Forex"
  | "Crypto Trading"
  | "Graphics Design"
  | "Community";

export type EventFormat = "In-person" | "Online" | "In-person & Online";

export interface AcademyEvent {
  id: string;
  title: string;
  category: EventCategory;
  startDate: string; // ISO date the event starts, e.g. 2026-09-20
  endDate?: string;
  time: string;
  format: EventFormat;
  location: string;
  description: string;
}
