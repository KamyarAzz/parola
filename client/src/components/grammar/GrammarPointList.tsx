import type {GrammarPoint} from "../../types";
import GrammarPointCard from "./GrammarPointCard";

interface GrammarPointListProps {
  points: GrammarPoint[];
  /** Heading level of each point's title; h3 when the list sits under an h2 */
  headingLevel?: "h2" | "h3";
}

export default function GrammarPointList({
  points,
  headingLevel = "h2",
}: GrammarPointListProps) {
  return (
    <ul
      aria-label="Grammar topics"
      className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-4"
    >
      {points.map((point) => (
        <GrammarPointCard
          key={point.id}
          point={point}
          headingLevel={headingLevel}
        />
      ))}
    </ul>
  );
}
