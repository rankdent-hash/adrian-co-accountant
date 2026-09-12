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
        {/* Not the shared .eyebrow class: that's red, which fails contrast
            on this dark background (~2:1). */}
        <p className="font-sans text-eyebrow font-semibold uppercase tracking-widest text-paper/60">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-h2-mobile font-normal text-paper md:text-h2">
          {title}
        </h1>
        {subhead && (
          <p className="mt-4 max-w-2xl text-body-mobile text-paper/75 md:text-body">{subhead}</p>
        )}
      </div>
    </section>
  );
}
