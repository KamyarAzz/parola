import Eyebrow from "../../../../components/Eyebrow";
import type {Suggestion} from "../../../../types";
import SuggestionItem from "./SuggestionItem";

interface SuggestionListProps {
  suggestions: Suggestion[];
}

export default function SuggestionList({suggestions}: SuggestionListProps) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-4 md:p-5">
      <Eyebrow>Suggested next</Eyebrow>
      <ul className="flex flex-col">
        {suggestions.map((suggestion) => (
          <SuggestionItem key={suggestion.id} suggestion={suggestion} />
        ))}
      </ul>
    </div>
  );
}
