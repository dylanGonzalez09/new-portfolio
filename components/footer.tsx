import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Prompt } from "./prompt";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-accent/10 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <Prompt command="exit" />
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} — {dict.text}
        </p>
        <p className="font-mono text-xs text-muted/70">{dict.builtWith}</p>
      </div>
    </footer>
  );
}
