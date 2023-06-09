export function formatTime(datetime: string): string {
  return new Date(datetime).getHours().toString();
}
