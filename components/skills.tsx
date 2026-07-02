import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Chip } from "./chip";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Skills({ dict }: { dict: Dictionary["skills"] }) {
  return (
    <Section
      id="skills"
      command={dict.command}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dict.groups.map((group, index) => (
          <Reveal key={group.label} delay={(index % 3) * 100} className="h-full">
            <div className="hud-card h-full border border-accent/15 bg-surface/70 p-6 transition-shadow hover:shadow-[0_0_28px_rgb(139_47_255/0.12)]">
              <h3 className="font-mono text-sm text-neon-cyan">
                <span className="text-muted">#</span> {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
