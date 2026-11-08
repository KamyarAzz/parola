import PageHeader from "../../../components/PageHeader";
import {lessonRange} from "../../../data/lessons";
import LessonList from "../components/lesson-list/LessonList";

/** All lessons, to study one at a time. */
export default function LessonsPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Nuovo Espresso 1"
        title="Study lesson by lesson"
        description={`Lessons ${lessonRange}, one page each: learn the words, verbs and grammar, then test yourself before moving on.`}
      />
      <LessonList />
    </div>
  );
}
