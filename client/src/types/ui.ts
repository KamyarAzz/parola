/** Types for shared UI components */

export interface TableColumn {
  label: string;
  align?: "left" | "right";
  /** Only read by screen readers */
  srOnly?: boolean;
}
