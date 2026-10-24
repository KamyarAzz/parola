import {Moon, SunMedium, SunMoon, type LucideIcon} from "lucide-react";
import type {ThemePreference} from "../types";

export const themeOptions: {
  value: ThemePreference;
  label: string;
  icon: LucideIcon;
}[] = [
  {value: "system", label: "Auto", icon: SunMoon},
  {value: "light", label: "Light", icon: SunMedium},
  {value: "dark", label: "Dark", icon: Moon},
];
