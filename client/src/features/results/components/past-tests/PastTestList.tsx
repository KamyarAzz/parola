import type {TestResult} from "../../../../types";
import PastTestListItem from "./PastTestListItem";

interface PastTestListProps {
  results: TestResult[];
}

export default function PastTestList({results}: PastTestListProps) {
  return (
    <ul className="md:hidden">
      {results.map((result) => (
        <PastTestListItem key={result.id} result={result} />
      ))}
    </ul>
  );
}
