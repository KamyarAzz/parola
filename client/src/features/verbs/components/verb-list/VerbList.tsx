import type {Verb} from "../../../../types";
import VerbCard from "./VerbCard";

interface VerbListProps {
  verbs: Verb[];
}

export default function VerbList({verbs}: VerbListProps) {
  return (
    <ul
      aria-label="Verbs"
      className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3 md:gap-4"
    >
      {verbs.map((verb) => (
        <VerbCard key={verb.it} verb={verb} />
      ))}
    </ul>
  );
}
