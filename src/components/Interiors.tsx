import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Lightbox, type LightboxImage } from './Lightbox';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

const interiorImages: LightboxImage[] = [
  {
    src: '/images/interior-reception-1920.webp',
    alt: 'Double-height reception and waiting area at Residencia',
    caption: 'Reception & waiting area',
  },
  {
    src: '/images/interior-bedroom-1920.webp',
    alt: 'Principal bedroom with textured feature wall and city view',
    caption: 'Principal bedroom',
  },
  {
    src: '/images/interior-bathroom-1920.webp',
    alt: 'Bathroom with green vanity, glass shower and warm lighting',
    caption: 'Bathroom',
  },
  {
    src: '/images/interior-kitchen-1920.webp',
    alt: 'Contemporary kitchen with light cabinetry and stone counters',
    caption: 'Kitchen',
  },
  {
    src: '/images/interior-drawing-1920.webp',
    alt: 'Drawing room with sectional sofa, wood panelling and soft lighting',
    caption: 'Drawing room',
  },
  {
    src: '/images/interior-lounge-1920.webp',
    alt: 'Lounge with city views, fireplace and neutral furnishings',
    caption: 'Lounge',
  },
  {
    src: '/images/interior-dining-1920.webp',
    alt: 'Dining room with a long table and green velvet chairs',
    caption: 'Dining',
  },
  {
    src: '/images/interior-corridor-1920.webp',
    alt: 'Apartment corridor with warm wood panelling',
    caption: 'Corridor',
  },
];

const layout = [
  'sm:col-span-7 aspect-[16/10]',
  'sm:col-span-5 aspect-[4/5]',
  'sm:col-span-5 aspect-square',
  'sm:col-span-7 aspect-[16/10]',
  'sm:col-span-6 aspect-[16/10]',
  'sm:col-span-6 aspect-[16/10]',
  'sm:col-span-6 aspect-[16/10]',
  'sm:col-span-6 aspect-[16/10]',
];

export function Interiors() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="container-cg">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionLabel index="05">Interiors</SectionLabel>
            <h2 className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)]">
              Crafted interiors that{' '}
              <em className="gold-text italic">elevate your lifestyle.</em>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="max-w-xl text-sm leading-relaxed text-cream/60 sm:text-[15px]">
              Soft colours, elegant textures and calm lighting bring a gentle harmony to every
              home. Bedrooms offer privacy and rest, bathrooms feel fresh and composed, and
              the lounge ties it all together — a place for conversation, quiet and the
              everyday moments that matter.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-12">
          {interiorImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 2) * 70} className={layout[index]}>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block h-full w-full overflow-hidden text-left"
                aria-label={`View ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream">
                    {image.caption}
                  </span>
                  <Maximize2 className="h-4 w-4 text-gold" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={interiorImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
