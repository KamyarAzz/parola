import {Navigate, useParams} from "react-router";
import StudySetHeader from "../../../components/study/StudySetHeader";
import {getScenarioGroup} from "../../../lib/sentences";
import {lessonOfSet} from "../../../lib/studySets";
import FreshSentences from "../components/fresh/FreshSentences";
import ScenarioList from "../components/scenario-list/ScenarioList";

/** One lesson or type: practise a single situation or a mix of all. */
export default function SentenceGroupPage() {
  const {groupId} = useParams();
  const group = getScenarioGroup(groupId);

  if (!group) return <Navigate to="/sentences" replace />;
  const lesson = lessonOfSet(group.id);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <StudySetHeader
        set={group}
        noun="situations"
        backTo={
          group.id.includes("-type-") ? "/sentences?by=format" : "/sentences"
        }
      />
      {lesson && <FreshSentences lessons={[lesson]} />}
      <ScenarioList scenarios={group.items} />
    </div>
  );
}
