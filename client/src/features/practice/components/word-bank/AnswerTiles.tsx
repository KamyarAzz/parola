import {useDroppable} from "@dnd-kit/core";
import {SortableContext, rectSortingStrategy} from "@dnd-kit/sortable";
import {ANSWER_AREA, answerTileId} from "../../../../lib/tileOrder";
import AnswerLines from "./AnswerLines";
import SortableTile from "./SortableTile";

interface AnswerTilesProps {
  words: string[];
  picked: number[];
  locked: boolean;
  onRemove: (position: number) => void;
}

/** The words placed so far; drag them to reorder or drop new ones between. */
export default function AnswerTiles({
  words,
  picked,
  locked,
  onRemove,
}: AnswerTilesProps) {
  const {setNodeRef, isOver} = useDroppable({
    id: ANSWER_AREA,
    disabled: locked,
  });

  return (
    <AnswerLines ref={setNodeRef} highlight={isOver}>
      <SortableContext
        items={picked.map(answerTileId)}
        strategy={rectSortingStrategy}
      >
        {picked.map((wordIndex, position) => (
          <SortableTile
            key={wordIndex}
            id={answerTileId(wordIndex)}
            word={words[wordIndex]}
            locked={locked}
            onClick={() => onRemove(position)}
          />
        ))}
      </SortableContext>
    </AnswerLines>
  );
}
