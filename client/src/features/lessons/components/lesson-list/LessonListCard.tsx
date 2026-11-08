import {ChevronRight} from "lucide-react";
import {Link} from "react-router";
import Eyebrow from "../../../../components/Eyebrow";
import {lessonContent, lessonCounts} from "../../../../lib/lessons";
import type {Lesson} from "../../../../types";

interface LessonListCardProps {
  lesson: Lesson;
}

export default function LessonListCard({lesson}: LessonListCardProps) {
  const content = lessonContent(lesson.number);
  return (
    <li>
      <Link
        to={`/lessons/${lesson.number}`}
        className="flex h-full items-center gap-3 rounded-2xl border border-line bg-surface p-4 hover:border-ink md:p-5"
      >
        <span
          aria-hidden
          className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-lg font-bold text-brand"
        >
          {lesson.number}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <Eyebrow>Lezione {lesson.number}</Eyebrow>
          <h2 lang="it" className="text-base font-semibold tracking-tight">
            {lesson.title}
          </h2>
          <p className="text-sm text-muted">{lesson.summary}</p>
          {content && (
            <p className="text-sm font-medium">{lessonCounts(content)}</p>
          )}
        </div>
        <ChevronRight aria-hidden size={20} className="shrink-0 text-muted" />
      </Link>
    </li>
  );
}
