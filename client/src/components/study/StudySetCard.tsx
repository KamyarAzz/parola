import {Link} from "react-router";
import {setDescription} from "../../lib/studySets";
import type {LessonItem, StudySet} from "../../types";
import Eyebrow from "../Eyebrow";

interface StudySetCardProps<T extends LessonItem> {
  set: StudySet<T>;
  to: string;
  /** Plural name of the items, e.g. "words" */
  noun: string;
  /** Italian text for an item, shown as a preview */
  previewOf: (item: T) => string;
}

const PREVIEW_COUNT = 3;

/** Card for one word or verb set, linking to its page. */
export default function StudySetCard<T extends LessonItem>({
  set,
  to,
  noun,
  previewOf,
}: StudySetCardProps<T>) {
  const preview = set.items.slice(0, PREVIEW_COUNT).map(previewOf).join(", ");

  return (
    <Link
      to={to}
      className="flex min-h-37.5 flex-col gap-3.5 rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-brand md:min-h-43 md:p-5"
    >
      <div className="flex items-center justify-between gap-2">
        <Eyebrow>{set.label}</Eyebrow>
        <span className="rounded-md bg-ground px-2 py-0.5 text-xs font-semibold tabular-nums">
          {set.items.length} {noun}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold tracking-tight md:text-lg">
          {set.title}
        </span>
        <span className="text-sm text-muted">{setDescription(set)}</span>
      </div>
      <span lang="it" className="mt-auto truncate text-[13px] text-muted">
        {preview}…
      </span>
    </Link>
  );
}
