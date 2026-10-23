import {ArrowLeft, Play} from "lucide-react";
import {Link} from "react-router";
import {setDescription} from "../../lib/studySets";
import type {LessonItem, StudySet} from "../../types";
import {buttonClass} from "../button";
import PageHeader from "../PageHeader";

interface StudySetHeaderProps<T extends LessonItem> {
  set: StudySet<T>;
  /** Plural name of the items, e.g. "words" */
  noun: string;
  /** Where "All … sets" goes */
  backTo: string;
}

/** Back link, title and start button at the top of a set's page. */
export default function StudySetHeader<T extends LessonItem>({
  set,
  noun,
  backTo,
}: StudySetHeaderProps<T>) {
  return (
    <div className="flex flex-col gap-4">
      <Link
        to={backTo}
        className="-ml-2 flex min-h-11 w-fit items-center gap-1.5 rounded-[10px] px-2 text-sm font-medium text-muted hover:bg-surface hover:text-ink"
      >
        <ArrowLeft aria-hidden size={18} />
        All {noun.slice(0, -1)} sets
      </Link>
      <PageHeader
        eyebrow={set.label}
        eyebrowLang="it"
        title={set.title}
        description={`${set.items.length} ${noun} · ${setDescription(set)}`}
      >
        <Link
          to={`/practice/${set.id}`}
          className={buttonClass("primary", "lg", "w-full md:w-auto md:px-7")}
        >
          <Play aria-hidden size={18} />
          Start practice
        </Link>
      </PageHeader>
    </div>
  );
}
