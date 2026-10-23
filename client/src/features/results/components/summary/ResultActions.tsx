import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import {getPracticeSet} from "../../../../lib/practiceSets";

interface ResultActionsProps {
  topicId: string;
}

export default function ResultActions({topicId}: ResultActionsProps) {
  const isWords = topicId.startsWith("words-");

  return (
    <div className="flex flex-col gap-2.5 md:flex-row-reverse md:justify-center md:gap-3">
      <Link to="/results" className={buttonClass("primary", "lg")}>
        See all results
      </Link>
      <Link
        to={`/practice/${topicId}`}
        className={buttonClass("secondary", "lg")}
      >
        Practise again
      </Link>
      <Link
        to={getPracticeSet(topicId)?.home ?? "/"}
        className={buttonClass(
          "secondary",
          "lg",
          "max-md:border-0 max-md:bg-transparent max-md:text-muted",
        )}
      >
        {isWords ? "Back to words" : "Back to topics"}
      </Link>
    </div>
  );
}
