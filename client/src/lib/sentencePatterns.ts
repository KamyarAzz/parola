/**
 * Answer patterns: (…) is optional and [a|b|c] picks one; both can nest.
 * "(Io) [sono|mi chiamo] Anna." → "Sono Anna.", "Mi chiamo Anna.",
 * "Io sono Anna.", "Io mi chiamo Anna."
 */

/** All strings for the pattern from `pos` up to one of `stops` (not consumed). */
function expandFrom(
  pattern: string,
  pos: number,
  stops: string,
): [string[], number] {
  let results = [""];
  while (pos < pattern.length && !stops.includes(pattern[pos])) {
    let options: string[];
    if (pattern[pos] === "(") {
      const [inner, end] = expandFrom(pattern, pos + 1, ")");
      // Leaving it out comes first, so the model answer is the shortest
      options = ["", ...inner];
      pos = end + 1;
    } else if (pattern[pos] === "[") {
      options = [];
      let end = pos;
      do {
        const [inner, stop] = expandFrom(pattern, end + 1, "|]");
        options.push(...inner);
        end = stop;
      } while (pattern[end] === "|");
      pos = end + 1;
    } else {
      options = [pattern[pos]];
      pos++;
    }
    results = results.flatMap((r) => options.map((o) => r + o));
  }
  return [results, pos];
}

/** Clean up spacing left by optional parts and capitalise each sentence. */
function tidy(sentence: string) {
  return sentence
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!?;:])/g, "$1")
    .trim()
    .replace(
      /(^|[.!?]\s)(\p{Ll})/gu,
      (_, before, letter) => before + letter.toUpperCase(),
    );
}

export function expandPattern(pattern: string): string[] {
  return [...new Set(expandFrom(pattern, 0, "")[0].map(tidy))];
}

/** Every accepted answer for a line; the first one is the model answer. */
export function expandAnswers(patterns: string[]): string[] {
  return [...new Set(patterns.flatMap(expandPattern))];
}
