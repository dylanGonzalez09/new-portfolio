export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent">
      {children}
    </span>
  );
}
