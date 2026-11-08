import {lessonTests} from "../../../../lib/lessons";
import LessonTestLink from "./LessonTestLink";

interface LessonTestListProps {
  lesson: number;
}

/** The tests for one lesson, ten questions each. */
export default function LessonTestList({lesson}: LessonTestListProps) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {lessonTests(lesson).map((test) => (
        <LessonTestLink key={test.practiceId} test={test} />
      ))}
    </ul>
  );
}
