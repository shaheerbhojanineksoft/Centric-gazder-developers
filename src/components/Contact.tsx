import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';
import { WhatsAppIcon } from './WhatsAppButton';
import {
  mapSearchHref,
  site,
  whatsappHref,
} from '../data/site';

export function Contact() {
  const cards = [
    {
      label: 'Call',
      value: site.phoneDisplay,
      href: site.phoneHref,
      Icon: Phone,
      external: false,
    },
    {
      label: 'Email',
      value: site.email,
      href: site.emailHref,
      Icon: Mail,
      external: false,
    },
    {
      label: 'WhatsApp',
      value: 'Message our team',
      href: whatsappHref(),
      Icon: WhatsAppIcon,
      external: true,
    },
    {
      label: 'Site office',
      value: site.address,
      href: mapSearchHref(),
      Icon: MapPin,
      external: true,
      wide: true,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-cream/10 bg-charcoal py-24 sm:py-32">
      <div className="absolute inset-0">
        <Img
          name="exterior-street"
          alt=""
          className="h-full w-full object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55" />
      </div>

      <div className="container-cg relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel index="10">Contact</SectionLabel>
              <h2 className="display mt-5 text-[clamp(2.9rem,5.5vw,5.2rem)]">
                Begin your address <em className="gold-text italic">in Clifton.</em>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/60 sm:text-[15px]">
                Speak with our team about availability, floor plans and a private site visit.
                We are happy to walk you through the residences and the payment plan.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a href={site.phoneHref} className="btn-outline">
                  Call now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12 flex items-center gap-4 border-t border-cream/10 pt-6">
                <span className="h-10 w-px bg-gold" />
                <div>
                  <p className="font-serif text-2xl text-cream">{site.director}</p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/40">
                    Director &middot; {site.legalName}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map(({ label, value, href, Icon, external, wide }, index) => (
              <Reveal
                key={label}
                delay={index * 60}
                className={wide ? 'sm:col-span-2' : ''}
              >
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex h-full flex-col justify-between gap-8 border border-cream/10 bg-ink/45 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold/45 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-cream/25 transition-colors group-hover:text-gold" />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold/70">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-cream/85">{value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
