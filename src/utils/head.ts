export function head<T>(array: T[] | string): T | string | undefined {
  return array != null && array.length ? array[0] : undefined;
}
