import { Award, GraduationCap, Languages } from "lucide-react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Education({ dict }: { dict: Dictionary["education"] }) {
  return (
    <Section
      id="education"
      command={dict.command}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="hud-card h-full space-y-6 border border-accent/15 bg-surface/70 p-6">
            {dict.items.map((item) => (
              <div key={item.institution} className="flex gap-4">
                <GraduationCap className="mt-1 size-6 shrink-0 text-accent" />
                <div>
                  <p className="font-mono text-xs text-neon-cyan">{item.period}</p>
                  <h3 className="mt-1 font-semibold">{item.institution}</h3>
                  <p className="text-sm text-muted">
                    {item.degree} — {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={100} className="grow">
            <div className="hud-card h-full border border-accent/15 bg-surface/70 p-6">
              <h3 className="flex items-center gap-2 font-mono text-sm text-neon-cyan">
                <Award className="size-4" />
                {dict.certificationsTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {dict.certifications.map((cert) => (
                  <li key={cert.name} className="text-sm">
                    {cert.name}{" "}
                    <span className="text-muted">— {cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200} className="grow">
            <div className="hud-card h-full border border-accent/15 bg-surface/70 p-6">
              <h3 className="flex items-center gap-2 font-mono text-sm text-neon-cyan">
                <Languages className="size-4" />
                {dict.languagesTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {dict.languages.map((language) => (
                  <li key={language.name} className="text-sm">
                    {language.name}{" "}
                    <span className="text-muted">— {language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
