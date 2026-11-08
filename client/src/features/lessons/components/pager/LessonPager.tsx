import {getLesson} from "../../../../lib/lessons";
import PagerLink from "./PagerLink";

interface LessonPagerProps {
  lesson: number;
}

/** Previous and next lesson, so you can work through them in order. */
export default function LessonPager({lesson}: LessonPagerProps) {
  const previous = getLesson(lesson - 1);
  const next = getLesson(lesson + 1);
  return (
    <nav aria-label="Other lessons" className="flex gap-3">
      {previous ? (
        <PagerLink lesson={previous} direction="previous" />
      ) : (
        <div className="flex-1" />
      )}
      {next && <PagerLink lesson={next} direction="next" />}
    </nav>
  );
}
