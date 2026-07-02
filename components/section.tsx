import { Prompt } from "./prompt";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  command: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function Section({ id, command, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <Reveal>
        <Prompt command={command} />
        <h2 className="neon-title mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-muted">{subtitle}</p>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
