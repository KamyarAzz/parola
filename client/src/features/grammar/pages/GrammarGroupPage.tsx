import {Navigate, useParams} from "react-router";
import StudySetHeader from "../../../components/study/StudySetHeader";
import {getGrammarGroup} from "../../../lib/grammar";
import GrammarPointList from "../components/point-list/GrammarPointList";

/** One lesson or area: read the summaries, then start a test. */
export default function GrammarGroupPage() {
  const {groupId} = useParams();
  const group = getGrammarGroup(groupId);

  if (!group) return <Navigate to="/grammar" replace />;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <StudySetHeader
        set={group}
        noun="topics"
        backTo={
          group.id.includes("-area-") ? "/grammar?by=category" : "/grammar"
        }
      />
      <GrammarPointList points={group.items} />
    </div>
  );
}
