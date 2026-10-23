import SectionCard from "../../../../components/SectionCard";
import type {AnswerRecord} from "../../../../types";
import MistakeItem from "./MistakeItem";

interface MistakeListProps {
  answers: AnswerRecord[];
}

export default function MistakeList({answers}: MistakeListProps) {
  const mistakes = answers.filter((a) => !a.correct);
  // Sample results only have the mistake count, not the questions
  const detailed = mistakes.filter((a) => a.prompt);

  if (mistakes.length === 0) return null;

  return (
    <SectionCard
      id="mistakes"
      title={`${mistakes.length} ${
        mistakes.length === 1 ? "mistake" : "mistakes"
      } to review`}
    >
      {detailed.length === 0 && (
        <p className="border-t border-line pt-3.5 text-sm text-muted">
          Details aren’t available for this sample test.
        </p>
      )}
      {detailed.map((answer) => (
        <MistakeItem key={answer.questionId} answer={answer} />
      ))}
    </SectionCard>
  );
}
