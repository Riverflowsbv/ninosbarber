import {
  Scissors,
  UserRound,
  Sparkles,
  Zap,
  Baby,
  GraduationCap,
  Ruler,
  Droplets,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Scissors,
  UserRound,
  Sparkles,
  Zap,
  Baby,
  GraduationCap,
  Ruler,
  Droplets,
};

export default function ServiceIcon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  const Cmp = map[name] ?? Scissors;
  return <Cmp size={size} strokeWidth={2.2} aria-hidden="true" />;
}
