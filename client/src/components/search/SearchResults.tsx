import type {ReactNode} from "react";
import EmptyState from "../EmptyState";

interface SearchResultsProps {
  query: string;
  count: number;
  /** What's being found, singular and plural: ["word", "words"] */
  noun: [one: string, many: string];
  /** The list of matches, shown when there are any */
  children: ReactNode;
}

/** Heading with the number of matches, then the matches or an empty state. */
export default function SearchResults({
  query,
  count,
  noun: [one, many],
  children,
}: SearchResultsProps) {
  return (
    <section aria-labelledby="results-heading" className="flex flex-col gap-4">
      <h2
        id="results-heading"
        aria-live="polite"
        className="text-lg font-semibold md:text-xl"
      >
        {count} {count === 1 ? one : many} for “{query.trim()}”
      </h2>
      {count > 0 ? (
        children
      ) : (
        <EmptyState>
          No {many} match “{query.trim()}”. Try Italian or English, or a shorter
          word.
        </EmptyState>
      )}
    </section>
  );
}
