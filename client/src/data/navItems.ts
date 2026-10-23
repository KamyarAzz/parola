import {
  BookOpen,
  BookText,
  ChartLine,
  Languages,
  MessageSquareText,
  PenLine,
  type LucideIcon,
} from "lucide-react";

export const navItems: {to: string; label: string; icon: LucideIcon}[] = [
  {to: "/", label: "Practice", icon: BookOpen},
  {to: "/sentences", label: "Sentences", icon: MessageSquareText},
  {to: "/words", label: "Words", icon: Languages},
  {to: "/verbs", label: "Verbs", icon: PenLine},
  {to: "/grammar", label: "Grammar", icon: BookText},
  {to: "/results", label: "Results", icon: ChartLine},
];
