import { ArrowRight } from 'lucide-react';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';
import { residencia } from '../data/projects';

const stats = [
  ['04', 'Bedrooms'],
  ['3', 'Residence types'],
  ['3,278–3,340', 'Square feet'],
  ['02', 'Cars included'],
];

export function ProjectIntro() {
  return (
    <section id="residencia" className="relative overflow-hidden border-t border-cream/10 bg-ink py-24 sm:py-32">
      <div className="container-cg">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionLabel index="03">Signature Project</SectionLabel>
            <h2 className="display mt-5 text-[clamp(3rem,6vw,6rem)] text-cream">
              Centric Gazdar <em className="gold-text italic">Residencia</em>
            </h2>
            <p className="mt-6 flex flex-wrap items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/55">
              <span>{residencia.location}</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span className="text-gold">{residencia.status}</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-4 text-sm leading-relaxed text-cream/65 sm:text-[15px]">
              {residencia.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <a href="#residences" className="btn-outline mt-8">
              Explore the residences
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 border-y border-cream/10 sm:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className={`px-4 py-7 sm:px-7 sm:py-8 ${
                  index !== 0 ? 'border-l border-cream/10' : ''
                } ${index >= 2 ? 'border-t border-cream/10 sm:border-t-0' : ''}`}
              >
                <p className="font-serif text-3xl text-gold sm:text-4xl">{value}</p>
                <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={100} className="container-cg mt-14">
        <div className="relative overflow-hidden">
          <Img
            name="exterior-dusk"
            alt="Centric Gazdar Residencia at dusk with illuminated curved terraces"
            className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/70">
              Residencia &middot; Clifton, Karachi
            </p>
            <p className="hidden text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/50 sm:block">
              Artist&rsquo;s impression
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
