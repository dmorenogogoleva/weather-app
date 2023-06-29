type Parts = (string | false | undefined)[];

export function buildClassName(...parts: Parts): string {
  return parts.filter(Boolean).join(" ");
}
