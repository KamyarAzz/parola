import type {Theme, ThemePreference} from "../types";

const DARK_QUERY = "(prefers-color-scheme: dark)";
const FADE_MS = 350;

const systemTheme = (): Theme =>
  window.matchMedia(DARK_QUERY).matches ? "dark" : "light";

export const resolveTheme = (preference: ThemePreference): Theme =>
  preference === "system" ? systemTheme() : preference;

/**
 * Sets the theme on <html> and matches the browser bar to the page.
 * `fade` cross-fades colours, for when the learner switches.
 */
export function applyTheme(theme: Theme, fade = false) {
  const root = document.documentElement;
  if (root.dataset.theme === theme) return;
  if (fade) {
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), FADE_MS);
  }
  root.dataset.theme = theme;
  const ground = getComputedStyle(root).getPropertyValue("--color-ground");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", ground.trim());
}

/**
 * Calls back when the system switches between light and dark. Also checks
 * again when the app comes back to the front, since an installed app in the
 * background can miss the switch (e.g. a phone going dark at sunset).
 */
export function onSystemThemeChange(callback: () => void) {
  const query = window.matchMedia(DARK_QUERY);
  const onVisible = () => {
    if (document.visibilityState === "visible") callback();
  };
  query.addEventListener("change", callback);
  document.addEventListener("visibilitychange", onVisible);
  return () => {
    query.removeEventListener("change", callback);
    document.removeEventListener("visibilitychange", onVisible);
  };
}
