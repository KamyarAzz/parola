import {Keyboard, LayoutGrid} from "lucide-react";

interface InputModeToggleProps {
  tileMode: boolean;
  onToggle: () => void;
}

/** Switches between typing and the easier word tiles. */
export default function InputModeToggle({
  tileMode,
  onToggle,
}: InputModeToggleProps) {
  const Icon = tileMode ? Keyboard : LayoutGrid;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex min-h-11 w-fit items-center gap-2 self-center rounded-[10px] px-3 text-sm font-semibold text-muted hover:bg-ground hover:text-ink"
    >
      <Icon aria-hidden size={18} />
      {tileMode ? "Type it instead" : "Too hard? Use word tiles"}
    </button>
  );
}
