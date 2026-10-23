import {Link} from "react-router";
import {freshPracticeId} from "../../../../lib/generator";

interface FreshLessonLinkProps {
  lesson: number;
}

/** A chip that starts fresh sentences for one lesson. */
export default function FreshLessonLink({lesson}: FreshLessonLinkProps) {
  return (
    <Link
      to={`/practice/${freshPracticeId(lesson)}`}
      lang="it"
      className="flex h-11 items-center rounded-full border border-line-strong bg-surface px-4 text-sm font-semibold hover:border-ink"
    >
      Lezione {lesson}
    </Link>
  );
}
