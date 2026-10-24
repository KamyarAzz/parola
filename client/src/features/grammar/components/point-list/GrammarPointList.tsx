import type {GrammarPoint} from "../../../../types";
import GrammarPointCard from "./GrammarPointCard";

interface GrammarPointListProps {
  points: GrammarPoint[];
}

export default function GrammarPointList({points}: GrammarPointListProps) {
  return (
    <ul
      aria-label="Grammar topics"
      className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-4"
    >
      {points.map((point) => (
        <GrammarPointCard key={point.id} point={point} />
      ))}
    </ul>
  );
}
