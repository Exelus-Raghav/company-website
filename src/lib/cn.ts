/** Joins class names, ignoring falsy values. Keeps us free of a clsx dependency. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
