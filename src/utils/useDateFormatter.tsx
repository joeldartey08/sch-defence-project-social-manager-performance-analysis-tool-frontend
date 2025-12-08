export const formatDate = (date: string | undefined) => {
  const fullFormattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date || ""));

  return fullFormattedDate;
};
