import {lessons} from "../../../../data/lessons";
import LessonListCard from "./LessonListCard";

export default function LessonList() {
  return (
    <ul aria-label="Lessons" className="grid gap-3 md:grid-cols-2 md:gap-4">
      {lessons.map((lesson) => (
        <LessonListCard key={lesson.number} lesson={lesson} />
      ))}
    </ul>
  );
}
