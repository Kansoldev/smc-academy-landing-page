import { Badge } from "@/components/ui/badge";
import { AcademyEvent } from "./types";
import { categoryStyle } from "./categories";
import { dateParts } from "./format-date";
import { cn } from "cn";

function EventRow({ event }: { event: AcademyEvent }) {
  const start = dateParts(event.startDate);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-white rounded-xl px-5 sm:px-10 py-6">
      <div className="flex sm:flex-col sm:items-start gap-2 sm:gap-0 shrink-0 sm:w-20">
        <span className="text-3xl leading-none">{start.day}</span>
        <span className="text-xl opacity-50">{start.month}</span>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge
            variant="secondary"
            className={cn(
              "border-0 font-normal",
              categoryStyle[event.category],
            )}
          >
            {event.category}
          </Badge>

          <span className="text-sm text-[#777772]">{event.format}</span>
        </div>

        <h4 className="text-lg">{event.title}</h4>
        <p className="text-sm text-[#777772] mt-2 md:w-3/4">
          {event.description}
        </p>
        <p className="text-sm text-[#777772] mt-2">
          {event.time} · {event.location}
        </p>
      </div>
    </div>
  );
}

export default EventRow;
