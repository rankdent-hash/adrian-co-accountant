export function PageHero({
  eyebrow,
  title,
  subhead,
}: {
  eyebrow: string;
  title: string;
  subhead?: string;
}) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="container-page py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-h1-mobile font-medium text-paper md:text-h2">
          {title}
        </h1>
        {subhead && (
          <p className="mt-4 max-w-2xl text-body-lg text-paper/75">{subhead}</p>
        )}
      </div>
    </section>
  );
}
