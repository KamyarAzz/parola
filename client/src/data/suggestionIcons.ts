import {
  BookOpen,
  RotateCcw,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import type {Suggestion} from "../types";

export const suggestionIcons: Record<Suggestion["kind"], LucideIcon> = {
  mistakes: Target,
  review: RotateCcw,
  new: BookOpen,
  fresh: Sparkles,
};
