import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

export function Architecture() {
  return (
    <section className="bg-cream py-24 text-ink sm:py-32">
      <div className="container-cg">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionLabel index="04" tone="dark">
              Architecture
            </SectionLabel>
            <h2 className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)]">
              Standing above the <em className="italic text-gold-deep">ordinary.</em>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-4 text-sm leading-relaxed text-ink/65 sm:text-[15px]">
              <p>
                Residencia rises with a structure that immediately sets it apart. The exterior
                carries a smooth flow of shapes, forming a design that captures light
                beautifully. Curved layers blend with natural elements, creating a pleasant
                look.
              </p>
              <p>
                Open terraces, rhythmic contours and a bold upward stretch make the building
                command attention. With a look that feels graceful and modern, it reflects a
                lifestyle shaped for those seeking comfort along with visual aesthetics.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-12">
          <Reveal className="sm:col-span-7">
            <div className="group overflow-hidden">
              <Img
                name="exterior-tower"
                alt="The full height of Centric Gazdar Residencia against a blue sky"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03] sm:aspect-[5/6]"
                sizes="(min-width: 640px) 58vw, 100vw"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                The tower &middot; Clifton
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/35">
                Artist&rsquo;s impression
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:col-span-5">
            <Reveal delay={80}>
              <div className="group overflow-hidden">
                <Img
                  name="exterior-street"
                  alt="Street-level view of Residencia with palm trees and landscaped frontage"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 640px) 42vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="group overflow-hidden">
                <Img
                  name="exterior-balcony"
                  alt="Close view of a planted terrace and curved glass balconies"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 640px) 42vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container-cg mt-4">
        <Reveal>
          <div className="relative overflow-hidden">
            <Img
              name="exterior-night"
              alt="Centric Gazdar Residencia illuminated at night"
              className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-gold">
                After dark
              </p>
              <p className="mt-4 max-w-2xl font-serif text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[1] text-cream">
                A tower that speaks <em className="italic text-gold-light">to the sky.</em>
              </p>
              <p className="mt-4 max-w-md text-[11px] leading-relaxed text-cream/60">
                Sunlight falls gently across the facade by day; by night, warm light traces
                every curve.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
