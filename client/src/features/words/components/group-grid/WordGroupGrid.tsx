import type {WordGroup} from "../../../../types";
import WordGroupCard from "./WordGroupCard";

interface WordGroupGridProps {
  groups: WordGroup[];
}

export default function WordGroupGrid({groups}: WordGroupGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3 md:gap-4">
      {groups.map((group) => (
        <WordGroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}
