import Eyebrow from "../../../../components/Eyebrow";
import type {LessonProgress} from "../../../../types";
import SectionProgressRow from "./SectionProgressRow";

interface LessonCardProps {
  lesson: LessonProgress;
}

export default function LessonCard({lesson}: LessonCardProps) {
  return (
    <div className="flex min-w-0 flex-col gap-2 rounded-2xl border border-line bg-surface p-4 md:p-5">
      <div className="flex flex-col gap-0.5">
        <Eyebrow>Lezione {lesson.lesson}</Eyebrow>
        <h3 lang="it" className="text-base font-semibold tracking-tight">
          {lesson.title}
        </h3>
      </div>
      <ul className="flex flex-col">
        {lesson.sections.map((section) => (
          <SectionProgressRow key={section.section} progress={section} />
        ))}
      </ul>
    </div>
  );
}
