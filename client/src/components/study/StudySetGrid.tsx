import type {LessonItem, StudySet} from "../../types";
import StudySetCard from "./StudySetCard";

interface StudySetGridProps<T extends LessonItem> {
  sets: StudySet<T>[];
  /** Section path, e.g. "/words" */
  basePath: string;
  /** Plural name of the items, e.g. "words" */
  noun: string;
  previewOf: (item: T) => string;
}

export default function StudySetGrid<T extends LessonItem>({
  sets,
  basePath,
  noun,
  previewOf,
}: StudySetGridProps<T>) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3 md:gap-4">
      {sets.map((set) => (
        <StudySetCard
          key={set.id}
          set={set}
          to={`${basePath}/${set.id}`}
          noun={noun}
          previewOf={previewOf}
        />
      ))}
    </div>
  );
}
