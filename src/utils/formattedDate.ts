export function formattedDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-br", { timeZone: "UTC" });
}
