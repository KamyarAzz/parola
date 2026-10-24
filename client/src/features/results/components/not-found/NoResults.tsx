import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import EmptyState from "../../../../components/EmptyState";

/** Before the first test on this device. */
export default function NoResults() {
  return (
    <div className="flex flex-col items-center gap-4">
      <EmptyState>
        No tests yet on this device. Finish a test and your scores, weak spots
        and progress show up here.
      </EmptyState>
      <Link to="/" className={buttonClass("primary", "lg")}>
        Find something to practise
      </Link>
    </div>
  );
}
