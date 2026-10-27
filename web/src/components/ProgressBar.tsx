export function ProgressBar({ percent }: { percent: number }) {
  const clamped = Math.min(100, Math.max(0, percent));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-panel-2">
      <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${clamped}%` }} />
    </div>
  );
}
