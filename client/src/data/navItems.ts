import {
  BookOpen,
  ChartLine,
  Languages,
  PenLine,
  type LucideIcon,
} from "lucide-react";

export const navItems: {to: string; label: string; icon: LucideIcon}[] = [
  {to: "/", label: "Practice", icon: BookOpen},
  {to: "/words", label: "Words", icon: Languages},
  {to: "/verbs", label: "Verbs", icon: PenLine},
  {to: "/results", label: "Results", icon: ChartLine},
];
