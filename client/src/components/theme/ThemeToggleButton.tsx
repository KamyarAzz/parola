import {themeOptions} from "../../data/themeOptions";
import {useSettingsStore} from "../../stores/settingsStore";

/** One button that cycles Auto → Light → Dark, for the phone header. */
export default function ThemeToggleButton() {
  const theme = useSettingsStore((s) => s.theme);
  const setTheme = useSettingsStore((s) => s.setTheme);
  const index = themeOptions.findIndex((o) => o.value === theme);
  const current = themeOptions[index];
  const next = themeOptions[(index + 1) % themeOptions.length];
  const Icon = current.icon;

  return (
    <button
      type="button"
      onClick={() => setTheme(next.value)}
      aria-label={`Theme: ${current.label}. Switch to ${next.label}`}
      className="flex size-11 items-center justify-center rounded-[10px] text-muted hover:bg-ground hover:text-ink"
    >
      <Icon aria-hidden size={22} />
    </button>
  );
}
