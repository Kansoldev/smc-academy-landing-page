import { View } from "./types";

export function EmptyState({ view }: { view: View }) {
  return (
    <div className="rounded-xl border border-dashed border-[#D8D9E6] py-16 text-center">
      <p className="text-[#5B5F6E]">
        {view === "upcoming"
          ? "No upcoming events match that search yet — check back soon or clear your filters."
          : "No past events match that search."}
      </p>
    </div>
  );
}

export default EmptyState;
