import {Play} from "lucide-react";
import {Link} from "react-router";
import {setDescription} from "../../lib/studySets";
import type {LessonItem, StudySet} from "../../types";
import BackLink from "../BackLink";
import {buttonClass} from "../button";
import PageHeader from "../PageHeader";

interface StudySetHeaderProps<T extends LessonItem> {
  set: StudySet<T>;
  /** Plural name of the items, e.g. "words" */
  noun: string;
  /** Where "All sets" goes */
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
      <BackLink to={backTo}>All sets</BackLink>
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
