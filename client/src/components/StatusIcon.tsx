import {Check, X} from "lucide-react";

interface StatusIconProps {
  correct: boolean;
  size?: "md" | "lg";
}

const sizes = {
  md: "size-10 md:size-11",
  lg: "size-14 md:size-16",
};

/** Round green tick or red cross. */
export default function StatusIcon({correct, size = "md"}: StatusIconProps) {
  const Icon = correct ? Check : X;

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full text-white ${
        correct ? "bg-brand" : "bg-error"
      } ${sizes[size]}`}
    >
      <Icon aria-hidden size={size === "lg" ? 28 : 22} strokeWidth={2.5} />
    </div>
  );
}
