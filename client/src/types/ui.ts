/** Types for shared UI components */

export interface TableColumn {
  label: string;
  align?: "left" | "right";
  /** Only read by screen readers */
  srOnly?: boolean;
}

/** "system" follows the phone or computer's own setting. */
export type ThemePreference = "system" | "light" | "dark";

export type Theme = "light" | "dark";
