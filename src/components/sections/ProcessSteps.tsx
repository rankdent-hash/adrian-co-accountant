export type ProcessStep = {
  step: number;
  title: string;
  description?: string;
};

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
      {steps.map((step, index) => (
        <li key={step.step} className="relative flex flex-col">
          <span className="font-display text-3xl font-medium text-gold">
            0{step.step}
          </span>
          <h3 className="mt-3 font-display text-h3 font-medium text-ink">
            {step.title}
          </h3>
          {step.description && (
            <p className="mt-2 text-sm text-slate">{step.description}</p>
          )}
          {index < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute right-[-1.5rem] top-4 hidden h-px w-12 bg-line md:block"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
