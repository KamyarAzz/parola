import {useDroppable} from "@dnd-kit/core";
import {BANK_AREA, bankTileId} from "../../../../lib/tileOrder";
import BankTile from "./BankTile";

interface BankTilesProps {
  words: string[];
  picked: number[];
  locked: boolean;
  onPick: (wordIndex: number) => void;
}

/** Words still to use. Dropping a placed word here takes it back out. */
export default function BankTiles({
  words,
  picked,
  locked,
  onPick,
}: BankTilesProps) {
  const {setNodeRef} = useDroppable({id: BANK_AREA, disabled: locked});

  return (
    <div
      ref={setNodeRef}
      aria-label="Word bank"
      className="flex flex-wrap justify-center gap-2 md:gap-2.5"
    >
      {words.map((word, i) => (
        <BankTile
          key={i}
          id={bankTileId(i)}
          word={word}
          used={picked.includes(i)}
          locked={locked}
          onClick={() => onPick(i)}
        />
      ))}
    </div>
  );
}
