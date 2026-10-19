import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';
import { site } from '../data/site';

const values = [
  {
    title: 'Architecture with intent',
    body: 'Every curve and opening is drawn around light, privacy and the way a home is actually lived.',
  },
  {
    title: 'Quality in the detail',
    body: 'Materials, finishes and services are selected for how they feel and endure, not just how they photograph.',
  },
  {
    title: 'Transparency',
    body: 'Clear plans, clear payment schedules and direct access to the people responsible.',
  },
  {
    title: 'Timely delivery',
    body: 'A disciplined approach to construction and coordination, with the intent to deliver as promised.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-cream py-24 text-ink sm:py-32">
      <div className="container-cg">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel index="01" tone="dark">
                The Developer
              </SectionLabel>
              <h2 className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)] text-ink">
                A Karachi developer with a{' '}
                <em className="italic text-gold-deep">long view.</em>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 space-y-5 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
                <p>
                  Centric Gazdar Builders &amp; Developers is a Karachi-based development
                  company shaping residential addresses of enduring value. A subsidiary of
                  Pakasia Group of Companies, we bring together thoughtful architecture,
                  considered interiors and a commitment to delivering what we promise.
                </p>
                <p>
                  Our approach is simple: begin with the address, design for the way people
                  actually live, and obsess over the details that make a home feel
                  effortless. Residencia is the first expression of that philosophy — a tower
                  conceived for Clifton, shaped by light, curves and calm.
                </p>
              </div>
            </Reveal>

            <div className="mt-11 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 60}>
                  <div className="border-t border-ink/15 pt-4">
                    <span className="text-[9px] font-semibold tracking-[0.24em] text-gold-deep">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink/60 sm:text-[13px]">
                      {value.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-11 flex items-center gap-4 border-t border-ink/15 pt-6">
                <span className="h-10 w-px bg-gold-deep" />
                <div>
                  <p className="font-serif text-xl font-semibold">{site.director}</p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                    Director
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden">
              <Img
                name="about-exterior"
                alt="Centric Gazdar Residencia exterior with curved balconies and greenery"
                className="aspect-[4/5] w-full object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 pt-20">
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold">
                  Signature project
                </p>
                <p className="mt-1 font-serif text-2xl text-cream">Residencia, Clifton</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-[1fr_auto] items-stretch gap-5">
              <div className="border border-ink/15 p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                  Our address
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{site.address}</p>
              </div>
              <div className="hex-pattern hidden w-28 items-center justify-center border border-gold-deep/25 sm:flex">
                <span className="vertical-label text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
                  Est. Karachi
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
