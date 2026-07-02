"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type HeaderProps = {
  lang: Locale;
  labels: Dictionary["nav"];
};

export function Header({ lang, labels }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = lang === "es" ? "en" : "es";

  const links = [
    { href: "#experience", label: labels.experience },
    { href: "#projects", label: labels.projects },
    { href: "#skills", label: labels.skills },
    { href: "#education", label: labels.education },
    { href: "#contact", label: labels.contact },
  ];

  const localeSwitch = (
    <Link
      href={`/${otherLocale}`}
      aria-label={labels.switchLocaleLabel}
      className="border border-neon-cyan/30 px-3 py-1 font-mono text-xs text-neon-cyan transition-all hover:border-neon-cyan hover:shadow-[0_0_12px_rgb(34_229_255/0.3)]"
    >
      {labels.switchLocale}
    </Link>
  );

  const navLink = (href: string, label: string, onClick?: () => void) => (
    <a
      key={href}
      href={href}
      onClick={onClick}
      className="font-mono text-sm text-muted transition-colors hover:text-neon-cyan"
    >
      <span className="text-accent">./</span>
      {label.toLowerCase()}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/10 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href={`/${lang}`} className="font-mono text-sm font-semibold">
          <span className="text-neon-cyan">~/</span>yaiir.dev
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(({ href, label }) => navLink(href, label))}
          {localeSwitch}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {localeSwitch}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? labels.closeMenu : labels.openMenu}
            aria-expanded={open}
            className="text-muted transition-colors hover:text-foreground"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-accent/10 bg-background/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(({ href, label }) =>
              navLink(href, label, () => setOpen(false))
            )}
          </div>
        </div>
      )}
    </header>
  );
}
