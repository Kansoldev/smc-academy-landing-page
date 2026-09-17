import { Badge } from "@/components/ui/badge";
import { AcademyEvent } from "./types";
import { categoryStyle } from "./categories";
import { formatEventDate } from "./format-date";
import { cn } from "cn";

function EventCard({ event }: { event: AcademyEvent }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#E4E4E0] bg-white p-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <Badge
          variant="secondary"
          className={cn("border-0 font-normal", categoryStyle[event.category])}
        >
          {event.category}
        </Badge>

        <span className="text-xs text-[#8A8E9C]">
          {formatEventDate(event.startDate, event.endDate)}
        </span>
      </div>

      <h4 className="text-lg text-[#121936]">{event.title}</h4>
      <p className="mt-1 text-sm text-[#8A8E9C]">{event.location}</p>
      <p className="mt-3 text-sm text-[#5B5F6E]">{event.description}</p>
    </div>
  );
}

export default EventCard;
