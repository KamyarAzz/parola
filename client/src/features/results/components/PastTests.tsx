import SectionCard from "../../../components/SectionCard";
import type {TestResult} from "../../../types";
import PastTestList from "./PastTestList";
import PastTestTable from "./PastTestTable";

interface PastTestsProps {
  results: TestResult[];
}

/** A list on phones, a table on desktop. */
export default function PastTests({results}: PastTestsProps) {
  return (
    <SectionCard id="past-tests" title="Past tests">
      <PastTestList results={results} />
      <PastTestTable results={results} />
    </SectionCard>
  );
}
