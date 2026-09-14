const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function dateParts(iso: string) {
  const d = new Date(`${iso}T00:00:00`);

  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: MONTHS[d.getMonth()],
    year: d.getFullYear(),
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
  };
}

/** "Mon 7 Sep 2026" or "Mon 7 – Wed 9 Sep 2026" when an endDate is given */
export function formatEventDate(startDate: string, endDate?: string) {
  const start = dateParts(startDate);

  if (!endDate || endDate === startDate) {
    return `${start.weekday} ${parseInt(start.day, 10)} ${start.month} ${start.year}`;
  }

  const end = dateParts(endDate);

  return `${start.weekday} ${parseInt(start.day, 10)} – ${end.weekday} ${parseInt(
    end.day,
    10,
  )} ${end.month} ${end.year}`;
}

export function isUpcoming(iso: string, referenceDate: Date = new Date()) {
  const d = new Date(`${iso}T23:59:59`);
  return d.getTime() >= referenceDate.getTime();
}
