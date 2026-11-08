import {ArrowLeft, ArrowRight} from "lucide-react";
import {Link} from "react-router";
import Eyebrow from "../../../../components/Eyebrow";
import type {Lesson} from "../../../../types";

interface PagerLinkProps {
  lesson: Lesson;
  direction: "previous" | "next";
}

/** A link to the lesson before or after this one. */
export default function PagerLink({lesson, direction}: PagerLinkProps) {
  const next = direction === "next";
  const Arrow = next ? ArrowRight : ArrowLeft;
  return (
    <Link
      to={`/lessons/${lesson.number}`}
      className={`flex min-h-16 min-w-0 flex-1 items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 hover:border-ink ${
        next ? "flex-row-reverse text-right" : ""
      }`}
    >
      <Arrow aria-hidden size={20} className="shrink-0 text-muted" />
      <div className="flex min-w-0 flex-col">
        <Eyebrow>
          {next ? "Next" : "Previous"} · Lezione {lesson.number}
        </Eyebrow>
        <span lang="it" className="truncate font-semibold">
          {lesson.title}
        </span>
      </div>
    </Link>
  );
}
