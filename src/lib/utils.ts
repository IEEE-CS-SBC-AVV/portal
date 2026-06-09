export function formatDate(date: string | Date): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "Invalid Date";
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function isUpcoming(date: string, time?: string): boolean {
  const eventDate = new Date(date);
  if (isNaN(eventDate.getTime())) return false;
  if (time && time !== "TBD") {
    const timeParts = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (timeParts) {
      let hours = Number(timeParts[1]);
      const minutes = Number(timeParts[2]);
      const period = timeParts[3].toUpperCase();
      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      eventDate.setHours(hours, minutes, 0, 0);
    }
  }
  return eventDate > new Date();
}
