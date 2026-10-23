import {BookOpen, ChartLine, Languages, type LucideIcon} from "lucide-react";

export const navItems: {to: string; label: string; icon: LucideIcon}[] = [
  {to: "/", label: "Practice", icon: BookOpen},
  {to: "/words", label: "Words", icon: Languages},
  {to: "/results", label: "Results", icon: ChartLine},
];
