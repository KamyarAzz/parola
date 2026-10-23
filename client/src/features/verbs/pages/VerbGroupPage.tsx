import {Navigate, useParams} from "react-router";
import StudySetHeader from "../../../components/study/StudySetHeader";
import {getVerbGroup} from "../../../lib/verbs";
import VerbList from "../components/verb-list/VerbList";

/** One lesson or verb type: look over the forms, then start a test. */
export default function VerbGroupPage() {
  const {groupId} = useParams();
  const group = getVerbGroup(groupId);

  if (!group) return <Navigate to="/verbs" replace />;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <StudySetHeader
        set={group}
        noun="verbs"
        backTo={group.id.includes("-type-") ? "/verbs?by=type" : "/verbs"}
      />
      <VerbList verbs={group.items} />
    </div>
  );
}
