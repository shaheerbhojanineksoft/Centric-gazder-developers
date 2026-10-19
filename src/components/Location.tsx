import { ArrowUpRight, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';
import { mapEmbedHref, mapSearchHref, site } from '../data/site';

const distances = [
  { time: '1', unit: 'min', place: 'Teen Talwar' },
  { time: '4', unit: 'min', place: 'Ocean Mall' },
  { time: '5', unit: 'min', place: 'Do Talwar' },
];

const landmarks = [
  'HBL Tower',
  'Gulf Shopping Mall',
  'Schon Circle',
  'Hilal-e-Ahmer Hospital',
  'Navy Housing Society',
  'Emerald Tower & Mall',
  '1st Zamzama Street',
  'Khayaban-e-Iqbal',
];

export function Location() {
  return (
    <section className="bg-cream py-24 text-ink sm:py-32">
      <div className="container-cg">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel index="08" tone="dark">
                Location
              </SectionLabel>
              <h2 className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)]">
                Engraved in the <em className="italic text-gold-deep">connected vicinity.</em>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-[15px]">
                Placed in a pocket of Karachi that radiates long-lasting value, Residencia
                stands within a few breaths of important landmarks. A quick one-minute route
                leads to Teen Talwar, Ocean Mall sits four minutes away, and Do Talwar is five
                minutes from the address.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {distances.map((distance, index) => (
                <Reveal key={distance.place} delay={index * 60}>
                  <div className="border border-ink/15 p-4 sm:p-5">
                    <p className="font-serif text-4xl leading-none text-gold-deep sm:text-5xl">
                      {distance.time}
                      <span className="ml-1 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-ink/40">
                        {distance.unit}
                      </span>
                    </p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/60">
                      {distance.place}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                  Nearby
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {landmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="inline-flex items-center gap-1.5 border border-ink/12 px-3 py-1.5 text-[10px] text-ink/60"
                    >
                      <MapPin className="h-3 w-3 text-gold-deep" />
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 border-t border-ink/15 pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                  Site office
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/70">
                  {site.address}
                </p>
                <a
                  href={mapSearchHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:text-gold-deep"
                >
                  Open in Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="overflow-hidden border border-ink/15 bg-white p-2">
              <iframe
                title="Map showing the Centric Gazdar Residencia site office in Clifton, Karachi"
                src={mapEmbedHref()}
                className="h-[420px] w-full grayscale-[25%] sm:h-[560px] lg:h-[640px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                Clifton &middot; Karachi
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                Prime address
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
