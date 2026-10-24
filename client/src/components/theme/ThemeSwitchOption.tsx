import type {themeOptions} from "../../data/themeOptions";
import type {ThemePreference} from "../../types";

interface ThemeSwitchOptionProps {
  option: (typeof themeOptions)[number];
  active: boolean;
  onSelect: (theme: ThemePreference) => void;
}

export default function ThemeSwitchOption({
  option,
  active,
  onSelect,
}: ThemeSwitchOptionProps) {
  const Icon = option.icon;

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(option.value)}
      className={`flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-lg text-xs font-medium transition-colors ${
        active ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink"
      }`}
    >
      <Icon aria-hidden size={16} />
      {option.label}
    </button>
  );
}
