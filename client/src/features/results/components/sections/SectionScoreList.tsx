import SectionCard from "../../../../components/SectionCard";
import type {SectionScore} from "../../../../lib/progress";
import SectionScoreRow from "./SectionScoreRow";

interface SectionScoreListProps {
  scores: SectionScore[];
}

export default function SectionScoreList({scores}: SectionScoreListProps) {
  return (
    <SectionCard
      id="sections"
      title="By section"
      description="Accuracy in your recent answers in each part of the app."
    >
      <ul className="flex flex-col">
        {scores.map((score) => (
          <SectionScoreRow key={score.section.id} score={score} />
        ))}
      </ul>
    </SectionCard>
  );
}
