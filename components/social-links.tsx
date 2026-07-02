import { Github, Instagram, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

const socials = [
  { href: site.github, label: "GitHub", Icon: Github },
  { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.instagram, label: "Instagram", Icon: Instagram },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="border border-accent/20 p-2.5 text-muted transition-all hover:border-neon-cyan/60 hover:text-neon-cyan hover:shadow-[0_0_12px_rgb(34_229_255/0.25)]"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
