import {
  ArrowUpDown,
  Building2,
  Car,
  Cloud,
  Dumbbell,
  Flame,
  Gamepad2,
  Lock,
  Moon,
  Users,
  Waves,
  Camera,
} from 'lucide-react';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

const amenities = [
  { label: 'Swimming pool', Icon: Waves },
  { label: 'Gymnasium', Icon: Dumbbell },
  { label: 'Sauna', Icon: Flame },
  { label: 'Steam room', Icon: Cloud },
  { label: 'Indoor gaming', Icon: Gamepad2 },
  { label: 'Community hall', Icon: Users },
  { label: 'Prayer area', Icon: Moon },
  { label: '24/7 CCTV', Icon: Camera },
  { label: 'Locker room', Icon: Lock },
  { label: 'Car parking', Icon: Car },
  { label: 'High-speed lifts', Icon: ArrowUpDown },
  { label: 'Reception & lobby', Icon: Building2 },
];

const amenityImages = [
  {
    name: 'amenity-pool',
    alt: 'Indoor swimming pool with city views at Residencia',
    caption: 'Swimming pool',
  },
  {
    name: 'amenity-gym',
    alt: 'Fully equipped gymnasium with natural light',
    caption: 'Gymnasium',
  },
  {
    name: 'amenity-games',
    alt: 'Indoor gaming lounge with pool tables',
    caption: 'Indoor gaming',
  },
  {
    name: 'amenity-spa',
    alt: 'Spa and sauna suite with warm stone finishes',
    caption: 'Spa & sauna',
  },
];

export function Amenities() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="container-cg">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionLabel index="07">Amenities</SectionLabel>
            <h2 className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)]">
              Amenities that <em className="gold-text italic">subside the rest.</em>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="max-w-xl text-sm leading-relaxed text-cream/60 sm:text-[15px]">
              Wellness, recreation and everyday convenience sit within the building. From the
              pool and gymnasium to the prayer area, community hall and 24/7 surveillance,
              Residencia is designed to make daily life feel complete.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map(({ label, Icon }, index) => (
            <Reveal key={label} delay={(index % 4) * 50}>
              <div className="group flex h-full items-center gap-4 border border-cream/10 bg-charcoal/60 px-4 py-4 transition-colors duration-300 hover:border-gold/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="text-[11px] font-medium text-cream/75 sm:text-xs">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenityImages.map((image, index) => (
            <Reveal key={image.name} delay={index * 60}>
              <div className="group relative overflow-hidden">
                <Img
                  name={image.name}
                  alt={image.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream">
                  {image.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-6 text-center text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/35">
            Indoor gaming &middot; Steam &middot; Lockers &middot; Community hall &middot; Prayer area &middot; 24/7 CCTV
          </p>
        </Reveal>
      </div>
    </section>
  );
}
