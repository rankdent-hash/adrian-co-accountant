/**
 * Visible marker for copy that hasn't been sourced yet. See README.md
 * "Content TODOs" for the full list — never replace this with invented copy.
 */
export function ContentPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-dashed border-gold bg-gold-light/20 px-5 py-4 text-sm text-ink ${className}`}
    >
      <span className="font-semibold">Content placeholder:</span> {label}
    </div>
  );
}
