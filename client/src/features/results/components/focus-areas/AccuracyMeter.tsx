import ProgressBar from "../../../../components/ProgressBar";

interface AccuracyMeterProps {
  /** 0–100 */
  accuracy: number;
  mistakes: number;
}

export default function AccuracyMeter({
  accuracy,
  mistakes,
}: AccuracyMeterProps) {
  return (
    <div className="flex flex-1 flex-col gap-1.5">
      <div className="flex justify-between text-xs md:text-[13px]">
        <span className="text-muted">{mistakes} mistakes</span>
        <span className="font-semibold text-warn-ink tabular-nums">
          {accuracy}% accuracy
        </span>
      </div>
      <ProgressBar value={accuracy} tone="warn" />
    </div>
  );
}
