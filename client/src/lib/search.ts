/** Lower case, without accents, so "perche" finds "perché". */
export const normalize = (text: string) =>
  text.normalize("NFD").replace(/\p{M}/gu, "").replace(/’/g, "'").toLowerCase();

const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * A query word matches the start of a word in the text. Longer words may end
 * in any vowel, so "mela" also finds "mele".
 */
function termPattern(term: string) {
  const stem =
    term.length >= 4 && /[aeio]$/.test(term)
      ? `${escape(term.slice(0, -1))}[aeio]`
      : escape(term);
  return new RegExp(`(^|[^\\p{L}])${stem}`, "u");
}

/** 0: a whole word of the main text, 1: the start of a word, 2: elsewhere. */
function rank(texts: string[], whole: string) {
  const [main = ""] = texts;
  const exact = new RegExp(`(^|[^\\p{L}])${escape(whole)}($|[^\\p{L}])`, "u");
  if (texts.slice(0, 2).some((text) => exact.test(text))) return 0;
  return main.includes(whole) ? 1 : 2;
}

/**
 * Items where every word of the query starts a word in the item's text,
 * best matches first. The first texts are the item's main ones (a word,
 * a title).
 */
export function search<T>(
  items: T[],
  query: string,
  textOf: (item: T) => string[],
): T[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  const patterns = terms.map(termPattern);
  const whole = terms.join(" ");
  const found = items.flatMap((item) => {
    const texts = textOf(item).map(normalize);
    const all = texts.join(" | ");
    if (!patterns.every((pattern) => pattern.test(all))) return [];
    return [{item, rank: rank(texts, whole)}];
  });
  return found.sort((a, b) => a.rank - b.rank).map(({item}) => item);
}
