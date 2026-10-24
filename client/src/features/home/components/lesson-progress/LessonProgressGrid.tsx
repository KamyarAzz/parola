import type {LessonProgress} from "../../../../types";
import LessonCard from "./LessonCard";

interface LessonProgressGridProps {
  lessons: LessonProgress[];
}

export default function LessonProgressGrid({lessons}: LessonProgressGridProps) {
  return (
    <section aria-labelledby="lessons-heading" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 id="lessons-heading" className="text-lg font-semibold md:text-xl">
          Your lessons
        </h2>
        <p className="text-sm text-muted">
          The bars show how much of each lesson you've practised; the percentage
          is your accuracy in recent answers.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:gap-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.lesson} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
