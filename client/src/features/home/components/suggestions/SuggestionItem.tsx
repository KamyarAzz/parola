import {ChevronRight} from "lucide-react";
import {Link} from "react-router";
import {suggestionIcons} from "../../../../data/suggestionIcons";
import type {Suggestion} from "../../../../types";

interface SuggestionItemProps {
  suggestion: Suggestion;
}

const tones: Record<Suggestion["kind"], string> = {
  mistakes: "bg-error-soft text-error-ink",
  review: "bg-warn-soft text-warn-ink",
  new: "bg-brand-soft text-brand",
  fresh: "bg-brand-soft text-brand",
};

export default function SuggestionItem({suggestion}: SuggestionItemProps) {
  const Icon = suggestionIcons[suggestion.kind];

  return (
    <li className="border-t border-line first:border-t-0">
      <Link
        to={suggestion.to}
        className="flex min-h-15 items-center gap-3 rounded-xl py-2.5 hover:bg-ground-soft"
      >
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${tones[suggestion.kind]}`}
        >
          <Icon aria-hidden size={20} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[15px] font-semibold">{suggestion.title}</span>
          <span className="text-[13px] text-muted">{suggestion.detail}</span>
        </span>
        <ChevronRight aria-hidden size={18} className="shrink-0 text-muted" />
      </Link>
    </li>
  );
}
