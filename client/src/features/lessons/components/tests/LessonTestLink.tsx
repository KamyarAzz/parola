import {ChevronRight} from "lucide-react";
import {Link} from "react-router";
import type {LessonTest} from "../../../../types";

interface LessonTestLinkProps {
  test: LessonTest;
}

export default function LessonTestLink({test}: LessonTestLinkProps) {
  return (
    <li>
      <Link
        to={`/practice/${test.practiceId}`}
        className="flex min-h-16 items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 hover:border-ink md:px-5"
      >
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="font-semibold">{test.title}</span>
          <span className="text-sm text-muted">{test.description}</span>
        </div>
        <ChevronRight aria-hidden size={20} className="shrink-0 text-muted" />
      </Link>
    </li>
  );
}
