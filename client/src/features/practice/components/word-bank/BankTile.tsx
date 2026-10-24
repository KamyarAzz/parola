import {useDraggable} from "@dnd-kit/core";
import WordTile from "./WordTile";

interface BankTileProps {
  /** Drag id, see lib/tileOrder */
  id: string;
  word: string;
  /** Already in the answer: shows an empty slot */
  used: boolean;
  locked: boolean;
  onClick: () => void;
}

/** A word in the bank: tap to add it at the end, or drag it into place. */
export default function BankTile({
  id,
  word,
  used,
  locked,
  onClick,
}: BankTileProps) {
  const {setNodeRef, listeners, isDragging} = useDraggable({
    id,
    disabled: locked || used,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      className={`touch-none ${isDragging ? "opacity-30" : ""}`}
    >
      <WordTile word={word} used={used} disabled={locked} onClick={onClick} />
    </div>
  );
}
