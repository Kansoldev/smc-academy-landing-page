import { dateParts, formatEventDate } from "./format-date";
import { AcademyEvent } from "./types";

function FeaturedEvent({ event }: { event: AcademyEvent }) {
  const start = dateParts(event.startDate);

  return (
    <div className="bg-black text-white overflow-hidden rounded-2xl">
      <div className="grid md:grid-cols-[auto_1fr] md:items-center gap-8 md:gap-12 p-6 sm:p-10">
        <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-1">
          <span className="text-6xl leading-none text-white">{start.day}</span>
          <span className="text-sm tracking-wide text-[#C7CBE0] md:mt-1">
            {start.month} {start.year}
          </span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl leading-snug">{event.title}</h3>
          <p className="max-w-xl text-[#C7CBE0] mt-3">{event.description}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm mt-6">
            <div>
              <dt className="text-[#8A90AF]">When</dt>
              <dd className="text-white mt-1">
                {formatEventDate(event.startDate, event.endDate)} · {event.time}
              </dd>
            </div>

            <div>
              <dt className="text-[#8A90AF]">Where</dt>
              <dd className="text-white mt-1">{event.location}</dd>
            </div>

            <div>
              <dt className="text-[#8A90AF]">Format</dt>
              <dd className="text-white mt-1">{event.format}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FeaturedEvent;
