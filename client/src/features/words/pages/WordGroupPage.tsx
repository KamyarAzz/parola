import {Navigate, useParams} from "react-router";
import StudySetHeader from "../../../components/study/StudySetHeader";
import {getWordGroup} from "../../../lib/words";
import WordList from "../components/word-list/WordList";

/** One lesson or topic: look over the words, then start a test. */
export default function WordGroupPage() {
  const {groupId} = useParams();
  const group = getWordGroup(groupId);

  if (!group) return <Navigate to="/words" replace />;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <StudySetHeader
        set={group}
        noun="words"
        backTo={group.id.includes("-topic-") ? "/words?by=topic" : "/words"}
      />
      <WordList words={group.items} />
    </div>
  );
}
