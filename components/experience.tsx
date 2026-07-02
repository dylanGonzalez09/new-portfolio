import { ChevronRight, MapPin } from "lucide-react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <Section
      id="experience"
      command={dict.command}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <ol className="relative border-s border-accent/20">
        {dict.items.map((item, index) => (
          <li key={`${item.company}-${item.period}`} className="relative ms-6 pb-14 last:pb-0">
            <span
              className="absolute -start-[30px] top-2 size-2.5 rotate-45 bg-accent shadow-[0_0_10px_rgb(181_108_255/0.8)]"
              aria-hidden
            />
            <Reveal delay={index * 100}>
              <p className="font-mono text-xs text-neon-cyan">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">
                {item.role} ·{" "}
                <span className="text-accent">{item.company}</span>
              </h3>
              <p className="mt-1 flex items-center gap-1 font-mono text-sm text-muted">
                <MapPin className="size-3.5" />
                {item.location}
              </p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 leading-relaxed text-muted"
                  >
                    <ChevronRight className="mt-1 size-4 shrink-0 text-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
