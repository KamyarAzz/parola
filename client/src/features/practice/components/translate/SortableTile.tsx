import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import WordTile from "./WordTile";

interface SortableTileProps {
  /** Drag id, see lib/tileOrder */
  id: string;
  word: string;
  locked: boolean;
  onClick: () => void;
}

/** A placed word that can be dragged to a new spot. */
export default function SortableTile({
  id,
  word,
  locked,
  onClick,
}: SortableTileProps) {
  const {setNodeRef, listeners, transform, transition, isDragging} =
    useSortable({id, disabled: locked});

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      style={{transform: CSS.Translate.toString(transform), transition}}
      className={`touch-none ${isDragging ? "opacity-30" : ""}`}
    >
      <WordTile word={word} disabled={locked} onClick={onClick} />
    </div>
  );
}
