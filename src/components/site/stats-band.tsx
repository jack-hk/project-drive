import { GraduationCap, HeartHandshake, Users } from "lucide-react";
import type { Stat } from "@/content/site";

const STAT_ICONS = {
  years: GraduationCap,
  students: Users,
  inclusive: HeartHandshake,
} as const;

type StatsBandProps = {
  stats: readonly Stat[];
};

export function StatsBand({ stats }: StatsBandProps) {
  return (
    <section aria-label="At a glance" className="bg-blue-deep text-paper">
      <ul className="mx-auto grid max-w-6xl grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = STAT_ICONS[stat.id as keyof typeof STAT_ICONS];
          return (
            <li
              key={stat.id}
              className={
                index === 0
                  ? "flex flex-col items-center gap-2 px-3 py-5 text-center text-sm leading-snug font-medium text-balance md:px-6 md:py-6 md:text-base"
                  : "flex flex-col items-center gap-2 border-l border-blue-line px-3 py-5 text-center text-sm leading-snug font-medium text-balance md:px-6 md:py-6 md:text-base"
              }
            >
              {Icon ? <Icon className="size-7" strokeWidth={1.75} aria-hidden="true" /> : null}
              {stat.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
