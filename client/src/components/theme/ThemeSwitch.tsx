import {themeOptions} from "../../data/themeOptions";
import {useSettingsStore} from "../../stores/settingsStore";
import ThemeSwitchOption from "./ThemeSwitchOption";

interface ThemeSwitchProps {
  /** Layout only, e.g. "mt-auto" */
  className?: string;
}

/** Auto / Light / Dark, side by side. */
export default function ThemeSwitch({className = ""}: ThemeSwitchProps) {
  const theme = useSettingsStore((s) => s.theme);
  const setTheme = useSettingsStore((s) => s.setTheme);

  return (
    <div
      role="group"
      aria-label="Theme"
      className={`grid grid-cols-3 gap-1 rounded-xl bg-ground p-1 ${className}`}
    >
      {themeOptions.map((option) => (
        <ThemeSwitchOption
          key={option.value}
          option={option}
          active={option.value === theme}
          onSelect={setTheme}
        />
      ))}
    </div>
  );
}
