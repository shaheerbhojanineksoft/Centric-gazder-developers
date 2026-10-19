import { ArrowRight, Play } from 'lucide-react';
import { Img } from './Img';

type HeroProps = {
  onWatchFilm: () => void;
};

export function Hero({ onWatchFilm }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Img
          name="hero-residencia"
          alt="Centric Gazdar Residencia rising above Clifton, Karachi at dusk"
          className="hero-zoom h-full w-full object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent" />
      </div>

      <div className="container-cg relative z-10 pb-10 pt-36 sm:pb-14">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold sm:text-[11px]">
            Centric Gazdar &middot; Builders &amp; Developers
          </p>
        </div>

        <h1 className="display mt-6 max-w-5xl text-[clamp(4rem,10vw,9.5rem)] text-cream">
          A legacy <em className="gold-text italic">begins.</em>
        </h1>

        <div className="mt-7 flex max-w-2xl flex-col gap-7 sm:mt-9">
          <p className="text-balance text-sm leading-relaxed text-cream/75 sm:text-base">
            Centric Gazdar Builders &amp; Developers creates residential addresses of
            enduring value in Karachi. Our signature project, Residencia, rises in the
            heart of Clifton.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#residencia" className="btn-gold">
              Explore Residencia
              <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={onWatchFilm} className="btn-outline">
              <Play className="h-3.5 w-3.5 fill-current" />
              Watch the film
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-cream/15 pt-6 sm:mt-16 sm:grid-cols-4">
          {[
            ['Location', 'Clifton, Karachi'],
            ['Residences', 'Four bedrooms'],
            ['Status', 'Now booking'],
            ['Developer', 'Centric Gazdar'],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold/80">
                {label}
              </p>
              <p className="mt-1.5 text-sm font-medium text-cream/90">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
