import { Download, Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { site } from "@/lib/site";
import { Prompt } from "./prompt";
import { Reveal } from "./reveal";
import { SocialLinks } from "./social-links";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-20 text-center sm:py-24">
      <Reveal>
        <div className="flex justify-center">
          <Prompt command={dict.command} />
        </div>
        <h2 className="neon-title mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <p className="mt-3 text-lg text-muted">{dict.subtitle}</p>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          {dict.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-background shadow-[0_0_20px_rgb(181_108_255/0.35)] transition-all hover:bg-accent/90 hover:shadow-[0_0_28px_rgb(181_108_255/0.5)]"
          >
            <Mail className="size-4" />
            {dict.emailCta}
          </a>
          <a
            href={dict.cvPath}
            download
            className="flex items-center gap-2 border border-neon-cyan/40 px-5 py-2.5 font-mono text-sm font-medium text-neon-cyan transition-all hover:border-neon-cyan hover:shadow-[0_0_20px_rgb(34_229_255/0.3)]"
          >
            <Download className="size-4" />
            {dict.downloadCv}
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-neon-cyan"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <SocialLinks className="justify-center" />
        </div>
      </Reveal>
    </section>
  );
}
