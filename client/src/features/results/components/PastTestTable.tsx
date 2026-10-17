import TableHeadCell from "../../../components/table/TableHeadCell";
import {pastTestColumns} from "../../../data/pastTestColumns";
import type {TestResult} from "../../../types";
import PastTestRow from "./PastTestRow";

interface PastTestTableProps {
  results: TestResult[];
}

export default function PastTestTable({results}: PastTestTableProps) {
  return (
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-160 border-collapse text-[15px]">
        <thead>
          <tr className="text-[13px] text-muted">
            {pastTestColumns.map((column) => (
              <TableHeadCell
                key={column.label}
                align={column.align}
                srOnly={column.srOnly}
              >
                {column.label}
              </TableHeadCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <PastTestRow key={result.id} result={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
