import type {Announcements, UniqueIdentifier} from "@dnd-kit/core";

/** Drag ids: placed tiles are "a-<word index>", bank tiles "b-<word index>". */
export const ANSWER_AREA = "answer-area";
export const BANK_AREA = "bank-area";

export const answerTileId = (wordIndex: number) => `a-${wordIndex}`;
export const bankTileId = (wordIndex: number) => `b-${wordIndex}`;

const wordIndexOf = (id: string) => Number(id.slice(2));

/**
 * The answer's word order after dropping a tile.
 * `after` is true when the tile was dropped on the right half of the target.
 */
export function dropTile(
  picked: number[],
  activeId: string,
  overId: string,
  after: boolean,
): number[] {
  const word = wordIndexOf(activeId);
  const rest = picked.filter((w) => w !== word);

  if (overId === BANK_AREA || overId.startsWith("b-")) {
    return rest;
  }
  if (overId === ANSWER_AREA) {
    return [...rest, word];
  }
  // Reordering placed words: take the slot of the word it was dropped on,
  // matching how the other words shift aside while dragging
  if (activeId.startsWith("a-")) {
    const to = picked.indexOf(wordIndexOf(overId));
    if (to === -1) return picked;
    return [...rest.slice(0, to), word, ...rest.slice(to)];
  }
  const target = rest.indexOf(wordIndexOf(overId));
  if (target === -1) return picked;
  const at = target + (after ? 1 : 0);
  return [...rest.slice(0, at), word, ...rest.slice(at)];
}

/** Screen reader messages that name the word instead of its drag id. */
export function tileAnnouncements(words: string[]): Announcements {
  const word = (id: UniqueIdentifier) => words[wordIndexOf(String(id))];
  const place = (id?: UniqueIdentifier) => {
    if (id === undefined) return "outside the answer";
    if (id === BANK_AREA || String(id).startsWith("b-"))
      return "in the word bank";
    if (id === ANSWER_AREA) return "at the end of your answer";
    return `next to ${word(id)}`;
  };
  return {
    onDragStart: ({active}) => `Picked up ${word(active.id)}.`,
    onDragOver: ({active, over}) => `${word(active.id)} is ${place(over?.id)}.`,
    onDragEnd: ({active, over}) =>
      `${word(active.id)} was dropped ${place(over?.id)}.`,
    onDragCancel: ({active}) => `Stopped dragging ${word(active.id)}.`,
  };
}
