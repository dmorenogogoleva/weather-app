export function head<T>(array: T[]): T | undefined {
  return array != null && array.length ? array[0] : undefined;
}
