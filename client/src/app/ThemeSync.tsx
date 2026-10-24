import {useEffect, useRef} from "react";
import {applyTheme, onSystemThemeChange, resolveTheme} from "../lib/theme";
import {useSettingsStore} from "../stores/settingsStore";

/** Keeps the page theme in step with the setting and, on Auto, the system. */
export default function ThemeSync() {
  const preference = useSettingsStore((s) => s.theme);
  const firstRun = useRef(true);

  useEffect(() => {
    applyTheme(resolveTheme(preference), !firstRun.current);
    firstRun.current = false;
    if (preference !== "system") return;
    return onSystemThemeChange(() => applyTheme(resolveTheme("system"), true));
  }, [preference]);

  return null;
}
