"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pastEvents, upcomingEvents } from "./events-data";
import FeaturedEvent from "./FeaturedEvent";
import EventRow from "./EventRow";
import EventCard from "./EventCard";
import EmptyState from "./EmptyView";
import { View } from "./types";

function EventsPage() {
  const [view, setView] = useState<View>("upcoming");
  const events = view === "upcoming" ? upcomingEvents : pastEvents;
  const [nextEvent, ...restUpcomingEvents] = events;

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-14 mb-9">
        <h1 className="text-4xl sm:text-5xl font-medium">Events</h1>

        <p className="max-w-xl text-black mt-4">
          Masterclasses, info sessions, and community meetups from SMC Academy
          in Uyo, and live on Zoom.
        </p>

        <div className="flex rounded-full border border-black w-fit bg-white mt-8 p-1">
          {(["upcoming", "past"] as View[]).map((v) => (
            <Button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "text-sm capitalize p-5",
                view === v
                  ? "bg-[black] text-white"
                  : "bg-transparent hover:bg-transparent text-[#777772] hover:text-black",
              )}
            >
              {v} events
            </Button>
          ))}
        </div>
      </section>

      {view === "upcoming" ? (
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <>
            {events.length === 0 ? <EmptyState view={view} /> : ""}

            {nextEvent && <FeaturedEvent event={nextEvent} />}

            {restUpcomingEvents.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-medium">
                  Also coming up
                </h2>

                <div className="flex flex-col gap-5 mt-5">
                  {restUpcomingEvents.map((event) => (
                    <EventRow key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}
          </>
        </section>
      ) : (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          {events.length === 0 ? (
            <EmptyState view={view} />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default EventsPage;
