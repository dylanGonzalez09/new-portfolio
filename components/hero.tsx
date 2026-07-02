import { ArrowDown, MapPin } from "lucide-react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Prompt } from "./prompt";
import { SocialLinks } from "./social-links";
import { Typewriter } from "./typewriter";

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-28">
        <div className="animate-fade-up flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {dict.available}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-muted">
            <MapPin className="size-3.5" />
            {dict.location}
          </span>
        </div>

        <div className="animate-fade-up mt-8" style={{ animationDelay: "100ms" }}>
          <Prompt command={dict.command} />
        </div>

        <h1
          className="animate-fade-up neon-title mt-4 text-5xl font-bold tracking-tight sm:text-7xl"
          style={{ animationDelay: "200ms" }}
        >
          <span className="glitch" data-text={dict.name}>
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {dict.name}
            </span>
          </span>
        </h1>

        <p
          className="animate-fade-up mt-4 min-h-9 font-mono text-xl font-medium text-muted sm:min-h-10 sm:text-2xl"
          style={{ animationDelay: "300ms" }}
        >
          <span className="text-neon-cyan">&gt;</span>{" "}
          <Typewriter words={dict.roles} />
        </p>

        <p
          className="animate-fade-up mt-6 max-w-xl leading-relaxed text-muted"
          style={{ animationDelay: "400ms" }}
        >
          {dict.description}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#contact"
            className="bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-background shadow-[0_0_20px_rgb(181_108_255/0.35)] transition-all hover:bg-accent/90 hover:shadow-[0_0_28px_rgb(181_108_255/0.5)]"
          >
            {dict.ctaContact}
          </a>
          <a
            href="#projects"
            className="border border-neon-cyan/40 px-5 py-2.5 font-mono text-sm font-medium text-neon-cyan transition-all hover:border-neon-cyan hover:shadow-[0_0_20px_rgb(34_229_255/0.3)]"
          >
            {dict.ctaProjects}
          </a>
          <SocialLinks />
        </div>
      </div>

      <a
        href="#experience"
        aria-label={dict.scrollDown}
        className="absolute inset-x-0 bottom-10 mx-auto w-fit text-neon-cyan"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
