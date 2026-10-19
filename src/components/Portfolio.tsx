import { ArrowUpRight } from 'lucide-react';
import { Img } from './Img';
import { LogoMark } from './Logo';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';
import { projects } from '../data/projects';
import { whatsappHref } from '../data/site';

export function Portfolio() {
  return (
    <section id="projects" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-cg">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel index="02">Our Portfolio</SectionLabel>
            <h2 className="display mt-5 max-w-2xl text-[clamp(2.8rem,5vw,4.8rem)]">
              Addresses in the <em className="gold-text italic">making.</em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-sm leading-relaxed text-cream/60">
              Every Centric Gazdar project begins with a location worth building around — and
              a commitment to create a home that holds its value and its character.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.65fr_1fr]">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <a
                href="#residencia"
                className="group relative block h-full overflow-hidden border border-cream/10"
              >
                <Img
                  name={project.cardImage}
                  alt={`${project.name} exterior`}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04] lg:aspect-[16/12]"
                  sizes="(min-width: 1024px) 65vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5" />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
                  <span className="rounded-full bg-gold px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-ink">
                    {project.status}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/80">
                    {project.location}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">
                    Signature Project
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-none text-cream sm:text-5xl">
                    {project.shortName}
                  </h3>
                  <p className="mt-3 max-w-lg text-xs leading-relaxed text-cream/70 sm:text-sm">
                    {project.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-4">
                    <div className="flex flex-wrap gap-x-7 gap-y-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/60">
                        Four bedrooms
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/60">
                        3,278–3,340 sq ft
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/60">
                        Now booking
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-gold">
                      Explore the project
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={140}>
            <div className="hex-pattern relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden border border-gold/20 bg-charcoal p-7 sm:p-9">
              <LogoMark className="h-16 w-auto text-gold/45" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">
                  Coming soon
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-cream sm:text-4xl">
                  More landmarks are taking shape.
                </h3>
                <p className="mt-4 max-w-xs text-xs leading-relaxed text-cream/55">
                  New addresses in Karachi are in development. Register your interest to hear
                  about them first.
                </p>
                <a
                  href={whatsappHref(
                    'Hello Centric Gazdar, I would like to hear about your upcoming projects in Karachi.',
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-gold transition hover:border-gold"
                >
                  Register your interest
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
