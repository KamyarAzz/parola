import type {LessonContent} from "../../../../types";
import JumpLink from "./JumpLink";

interface LessonJumpNavProps {
  content: LessonContent;
}

/** Links to each part of the lesson, with how many items it has. */
export default function LessonJumpNav({content}: LessonJumpNavProps) {
  const links = [
    {target: "words", label: "Words", count: content.words.length},
    {target: "verbs", label: "Verbs", count: content.verbs.length},
    {target: "grammar", label: "Grammar", count: content.grammar.length},
    {target: "test", label: "Test"},
  ];
  return (
    <nav aria-label="Parts of the lesson" className="flex flex-wrap gap-2">
      {links.map((link) => (
        <JumpLink key={link.target} {...link} />
      ))}
    </nav>
  );
}
