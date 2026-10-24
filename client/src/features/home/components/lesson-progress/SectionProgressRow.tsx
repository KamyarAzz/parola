import {Link} from "react-router";
import ProgressBar from "../../../../components/ProgressBar";
import {sections} from "../../../../data/sections";
import {percent} from "../../../../lib/progress";
import {scoreTone} from "../../../../lib/results";
import type {SectionProgress} from "../../../../types";

interface SectionProgressRowProps {
  progress: SectionProgress;
}

/** "Verbs  4/6 verbs  ▬▬▬──  82%", linking to that lesson's set. */
export default function SectionProgressRow({
  progress,
}: SectionProgressRowProps) {
  const section = sections.find((s) => s.id === progress.section);
  const covered = percent(progress.practised, progress.total) ?? 0;

  return (
    <li>
      <Link
        to={`${section?.path}/${progress.section}-lesson-${progress.lesson}`}
        className="flex min-h-11 items-center gap-3 rounded-lg text-sm hover:bg-ground-soft"
      >
        <span className="w-18 shrink-0 font-medium">{section?.title}</span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <ProgressBar value={covered} />
          <span className="text-xs text-muted tabular-nums">
            {progress.practised}/{progress.total} {section?.unit}
          </span>
        </span>
        <span
          className={`w-10 shrink-0 text-right font-semibold tabular-nums ${
            progress.accuracy === null
              ? "text-muted"
              : scoreTone(progress.accuracy)
          }`}
        >
          {progress.accuracy === null ? "–" : `${progress.accuracy}%`}
        </span>
      </Link>
    </li>
  );
}
