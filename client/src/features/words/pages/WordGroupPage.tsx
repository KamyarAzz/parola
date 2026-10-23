import {Navigate, useParams} from "react-router";
import {getWordGroup} from "../../../lib/words";
import WordGroupHeader from "../components/group-header/WordGroupHeader";
import WordList from "../components/word-list/WordList";

/** One lesson or topic: look over the words, then start a test. */
export default function WordGroupPage() {
  const {groupId} = useParams();
  const group = getWordGroup(groupId);

  if (!group) return <Navigate to="/words" replace />;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <WordGroupHeader group={group} />
      <WordList words={group.words} />
    </div>
  );
}
