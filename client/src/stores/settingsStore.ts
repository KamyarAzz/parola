import {create} from "zustand";
import {persist} from "zustand/middleware";
import type {ThemePreference} from "../types";

interface SettingsState {
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
}

// Per device; index.html reads "parola-settings" too, to set the theme early.
export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({theme}),
    }),
    {name: "parola-settings"},
  ),
);
