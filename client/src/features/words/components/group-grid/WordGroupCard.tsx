import {Link} from "react-router";
import Eyebrow from "../../../../components/Eyebrow";
import {lessonList} from "../../../../lib/words";
import type {WordGroup} from "../../../../types";

interface WordGroupCardProps {
  group: WordGroup;
}

const PREVIEW_COUNT = 3;

export default function WordGroupCard({group}: WordGroupCardProps) {
  const preview = group.words
    .slice(0, PREVIEW_COUNT)
    .map((w) => w.it)
    .join(", ");

  return (
    <Link
      to={`/words/${group.id}`}
      className="flex min-h-37.5 flex-col gap-3.5 rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-brand md:min-h-43 md:p-5"
    >
      <div className="flex items-center justify-between gap-2">
        <Eyebrow>{group.label}</Eyebrow>
        <span className="rounded-md bg-ground px-2 py-0.5 text-xs font-semibold tabular-nums">
          {group.words.length} words
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold tracking-tight md:text-lg">
          {group.title}
        </span>
        <span className="text-sm text-muted">
          {group.description || lessonList(group)}
        </span>
      </div>
      <span lang="it" className="mt-auto truncate text-[13px] text-muted">
        {preview}…
      </span>
    </Link>
  );
}
