import {BookOpen, ChartLine, type LucideIcon} from "lucide-react";

export const navItems: {to: string; label: string; icon: LucideIcon}[] = [
  {to: "/", label: "Practice", icon: BookOpen},
  {to: "/results", label: "Results", icon: ChartLine},
];
