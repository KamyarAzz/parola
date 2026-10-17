import {Link} from "react-router";
import {buttonClass} from "../../../components/button";

export default function ResultNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-bold">Test not found</h1>
      <Link to="/results" className={buttonClass("primary", "lg")}>
        Back to results
      </Link>
    </div>
  );
}
