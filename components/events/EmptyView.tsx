import { View } from "./types";

export function EmptyState({ view }: { view: View }) {
  return (
    <div className="rounded-xl text-center">
      <p className="text-[#777772] text-lg">
        {view === "upcoming"
          ? "No upcoming events yet — check back soon."
          : "No past events found."}
      </p>
    </div>
  );
}

export default EmptyState;
