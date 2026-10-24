import {Link} from "react-router";
import ProgressBar from "../../../../components/ProgressBar";
import type {SectionScore} from "../../../../lib/progress";
import {scoreTone} from "../../../../lib/results";

interface SectionScoreRowProps {
  score: SectionScore;
}

export default function SectionScoreRow({score}: SectionScoreRowProps) {
  const {section, answered, accuracy} = score;

  return (
    <li className="border-t border-line first:border-t-0">
      <Link
        to={section.path}
        className="flex min-h-14 items-center gap-4 py-2 hover:bg-ground-soft"
      >
        <span className="flex w-24 shrink-0 flex-col">
          <span className="text-[15px] font-semibold">{section.title}</span>
          <span className="text-xs text-muted tabular-nums">
            {answered} answers
          </span>
        </span>
        <ProgressBar value={accuracy ?? 0} className="flex-1" />
        <span
          className={`w-11 text-right font-semibold tabular-nums ${
            accuracy === null ? "text-muted" : scoreTone(accuracy)
          }`}
        >
          {accuracy === null ? "–" : `${accuracy}%`}
        </span>
      </Link>
    </li>
  );
}
