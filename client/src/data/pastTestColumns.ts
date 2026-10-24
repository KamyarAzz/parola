import type {TableColumn} from "../types";

export const pastTestColumns: TableColumn[] = [
  {label: "Date"},
  {label: "Practice"},
  {label: "Score", align: "right"},
  {label: "Mistakes", align: "right"},
  {label: "Time", align: "right"},
  {label: "Actions", srOnly: true},
];
