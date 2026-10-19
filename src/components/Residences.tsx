import { useState } from 'react';
import { ArrowRight, Check, Download, Maximize2 } from 'lucide-react';
import { Lightbox } from './Lightbox';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';
import { residencia } from '../data/projects';
import { formatNumber, formatPKR } from '../lib/format';
import { whatsappHref } from '../data/site';

export function Residences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [planOpen, setPlanOpen] = useState(false);
  const unit = residencia.units[activeIndex];

  return (
    <section id="residences" className="bg-cream py-24 text-ink sm:py-32">
      <div className="container-cg">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionLabel index="06" tone="dark">
              The Residences
            </SectionLabel>
            <h2 className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)]">
              Four-bedroom homes, considered in{' '}
              <em className="italic text-gold-deep">every detail.</em>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="max-w-xl text-sm leading-relaxed text-ink/65 sm:text-[15px]">
              Three distinct layouts, each with four bedrooms, a drawing room, lounge and
              dining, generous service areas and two covered car spaces. Choose the residence
              that fits the way you live.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div
            className="no-scrollbar mt-10 flex gap-1 overflow-x-auto border-b border-ink/15"
            role="tablist"
            aria-label="Apartment types"
          >
            {residencia.units.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`relative shrink-0 px-5 py-4 text-left transition-colors sm:px-7 ${
                  index === activeIndex ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
                }`}
              >
                <span className="block text-[9px] font-semibold uppercase tracking-[0.24em]">
                  {item.label}
                </span>
                <span className="mt-1 block font-serif text-lg">
                  {formatNumber(item.areaSqFt)} sq ft
                </span>
                {index === activeIndex && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gold-deep" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="border border-ink/15 bg-white p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/50">
                  Floor plan &middot; {unit.label}
                </p>
                <button
                  type="button"
                  onClick={() => setPlanOpen(true)}
                  className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-deep transition hover:text-ink"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  Expand
                </button>
              </div>

              <button
                type="button"
                onClick={() => setPlanOpen(true)}
                className="mt-3 block w-full cursor-zoom-in"
                aria-label={`Open ${unit.label} floor plan`}
              >
                <img
                  src={unit.planImage}
                  alt={`Floor plan of ${unit.label}, ${formatNumber(unit.areaSqFt)} square feet`}
                  className="mx-auto max-h-[640px] w-full object-contain"
                />
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-4">
                <a
                  href={unit.planPdf}
                  download
                  className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:text-gold-deep"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download floor plan
                </a>
                <span className="text-[9px] uppercase tracking-[0.18em] text-ink/35">
                  Not to scale
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col bg-charcoal p-7 text-cream sm:p-9">
              <p className="eyebrow">{unit.label}</p>
              <p className="mt-4 font-serif text-[clamp(2.8rem,5vw,4rem)] leading-none">
                {formatNumber(unit.areaSqFt)}
                <span className="ml-2 text-lg text-cream/45">sq ft</span>
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/50">
                {unit.bedrooms} bedrooms &middot; {unit.parking} car parking
              </p>

              <div className="mt-7 border-t border-cream/10 pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/45">
                  Total price
                </p>
                <p className="mt-1.5 font-serif text-3xl text-gold">
                  {formatPKR(unit.totalPrice)}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5">
                {unit.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 text-xs text-cream/70">
                    <Check className="h-3.5 w-3.5 shrink-0 text-gold" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2.5 pt-8">
                <a
                  href={whatsappHref(
                    `Hello Centric Gazdar, I'm interested in ${unit.label} (${formatNumber(
                      unit.areaSqFt,
                    )} sq ft) at Residencia. Please share availability and the payment plan.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold w-full"
                >
                  Request availability
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#payment-plan" className="btn-outline w-full">
                  View payment plan
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Lightbox
        images={[
          {
            src: unit.planImage,
            alt: `Floor plan of ${unit.label}`,
            caption: `${unit.label} · ${formatNumber(unit.areaSqFt)} sq ft`,
          },
        ]}
        index={planOpen ? 0 : null}
        onClose={() => setPlanOpen(false)}
        onNavigate={() => undefined}
      />
    </section>
  );
}
