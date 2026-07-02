export function Prompt({ command }: { command: string }) {
  return (
    <p className="font-mono text-sm">
      <span className="text-neon-cyan">dylan@dev</span>
      <span className="text-muted">:~$</span>{" "}
      <span className="text-foreground/90">{command}</span>
    </p>
  );
}
