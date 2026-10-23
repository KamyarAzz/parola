/** A random item from a list. */
export const pick = <T>(items: readonly T[]): T =>
  items[Math.floor(Math.random() * items.length)];

/** A whole number from min to max, both included. */
export const between = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));

/** Two different items from a list. */
export function pickTwo<T>(items: readonly T[]): [T, T] {
  const first = pick(items);
  return [first, pick(items.filter((item) => item !== first))];
}
