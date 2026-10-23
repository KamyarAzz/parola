import {ArrowLeft, Play} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import PageHeader from "../../../../components/PageHeader";
import {lessonList} from "../../../../lib/words";
import type {WordGroup} from "../../../../types";

interface WordGroupHeaderProps {
  group: WordGroup;
}

export default function WordGroupHeader({group}: WordGroupHeaderProps) {
  const backTo = group.id.startsWith("words-topic-")
    ? "/words?by=topic"
    : "/words";

  return (
    <div className="flex flex-col gap-4">
      <Link
        to={backTo}
        className="-ml-2 flex min-h-11 w-fit items-center gap-1.5 rounded-[10px] px-2 text-sm font-medium text-muted hover:bg-surface hover:text-ink"
      >
        <ArrowLeft aria-hidden size={18} />
        All word sets
      </Link>
      <PageHeader
        eyebrow={group.label}
        eyebrowLang="it"
        title={group.title}
        description={`${group.words.length} words · ${
          group.description || lessonList(group)
        }`}
      >
        <Link
          to={`/practice/${group.id}`}
          className={buttonClass("primary", "lg", "w-full md:w-auto md:px-7")}
        >
          <Play aria-hidden size={18} />
          Start practice
        </Link>
      </PageHeader>
    </div>
  );
}
