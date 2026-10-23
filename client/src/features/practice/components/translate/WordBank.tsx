import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {useState} from "react";
import {dropTile, tileAnnouncements} from "../../../../lib/tileOrder";
import AnswerTiles from "./AnswerTiles";
import BankTiles from "./BankTiles";
import WordTile from "./WordTile";

interface WordBankProps {
  words: string[];
  /** Indexes into words, in the order the learner picked them */
  picked: number[];
  onPick: (wordIndex: number) => void;
  onRemove: (position: number) => void;
  /** New order after a drag, e.g. a word dropped in the middle */
  onArrange: (picked: number[]) => void;
  locked: boolean;
}

/** Answer line above a bank of word tiles: tap them, or drag them into place. */
export default function WordBank({
  words,
  picked,
  onPick,
  onRemove,
  onArrange,
  locked,
}: WordBankProps) {
  // A small move before a drag starts, so taps still count as taps
  const sensors = useSensors(
    useSensor(PointerSensor, {activationConstraint: {distance: 6}}),
  );
  const [dragging, setDragging] = useState<string | null>(null);

  const handleDragEnd = ({active, over}: DragEndEvent) => {
    setDragging(null);
    if (!over) return;
    const moved = active.rect.current.translated;
    const after = moved
      ? moved.left + moved.width / 2 > over.rect.left + over.rect.width / 2
      : false;
    onArrange(dropTile(picked, String(active.id), String(over.id), after));
  };

  return (
    <DndContext
      sensors={sensors}
      accessibility={{announcements: tileAnnouncements(words)}}
      onDragStart={({active}) => setDragging(String(active.id))}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setDragging(null)}
    >
      <AnswerTiles
        words={words}
        picked={picked}
        locked={locked}
        onRemove={onRemove}
      />
      <BankTiles
        words={words}
        picked={picked}
        locked={locked}
        onPick={onPick}
      />
      <DragOverlay>
        {dragging && (
          <WordTile
            word={words[Number(dragging.slice(2))]}
            onClick={() => {}}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
}
