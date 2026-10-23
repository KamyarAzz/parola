import {X} from "lucide-react";
import {Link} from "react-router";
import ProgressBar from "../../../../components/ProgressBar";

interface PracticeHeaderProps {
  /** Where the quit button goes */
  exitTo: string;
  /** 0–100 */
  progress: number;
  /** 1-based number of the current question */
  position: number;
  total: number;
}

export default function PracticeHeader({
  exitTo,
  progress,
  position,
  total,
}: PracticeHeaderProps) {
  return (
    <header className="px-4 py-3.5 md:px-8 md:py-5">
      <div className="mx-auto flex max-w-240 items-center gap-3 md:gap-5">
        <Link
          to={exitTo}
          aria-label="Quit practice"
          className="flex size-11 shrink-0 items-center justify-center rounded-[10px] text-muted hover:bg-ground"
        >
          <X aria-hidden size={22} />
        </Link>
        <ProgressBar
          value={progress}
          size="lg"
          label="Test progress"
          className="flex-1"
        />
        <span className="shrink-0 text-sm font-semibold text-muted tabular-nums md:text-[15px]">
          {position} / {total}
        </span>
      </div>
    </header>
  );
}
