import { ExternalLink, FolderGit2, Github } from "lucide-react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Chip } from "./chip";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <Section
      id="projects"
      command={dict.command}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {dict.items.map((project, index) => (
          <Reveal key={project.name} delay={(index % 2) * 100} className="h-full">
            <article className="hud-card flex h-full flex-col border border-accent/15 bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_28px_rgb(139_47_255/0.15)]">
              <div className="flex items-center justify-between">
                <FolderGit2 className="size-8 text-accent" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${dict.codeLabel}: ${project.name}`}
                      className="text-muted transition-colors hover:text-neon-cyan"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${dict.demoLabel}: ${project.name}`}
                      className="text-muted transition-colors hover:text-neon-cyan"
                    >
                      <ExternalLink className="size-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 grow text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
