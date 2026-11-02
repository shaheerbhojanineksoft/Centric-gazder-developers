import { leadership } from '../data/site';

export function Leadership() {
  const { chairman, directors } = leadership;

  return (
    <div className="mt-11 border-t border-ink/15 pt-8">
      <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
        Leadership
      </p>

      <div className="mt-6 flex items-start gap-4">
        <span className="mt-1 h-12 w-px shrink-0 bg-gold-deep" aria-hidden />
        <div>
          <p className="font-serif text-2xl font-semibold text-ink">{chairman.name}</p>
          <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/45">
            {chairman.title}
          </p>
        </div>
      </div>

      <ul className="mt-8 grid gap-0 sm:grid-cols-2">
        {directors.map((person, index) => (
          <li
            key={person.name}
            className="flex items-baseline justify-between gap-4 border-t border-ink/10 py-4 pr-2 sm:odd:pr-6 sm:even:pl-6"
          >
            <div className="min-w-0">
              <span className="mr-3 text-[9px] font-semibold tracking-[0.2em] text-gold-deep">
                0{index + 1}
              </span>
              <span className="font-serif text-lg font-semibold text-ink">{person.name}</span>
            </div>
            <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">
              {person.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
