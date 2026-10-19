import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { site } from '../data/site';

const credits = [
  ['A project of', 'Centric Gazdar Builders & Developers'],
  ['Subsidiary of', 'Pakasia Group of Companies'],
  ['Architecture by', 'A.R.A Studio'],
  ['Marketed by', 'Alif Estate'],
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="container-cg py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:gap-20">
          <div>
            <a href="#top" aria-label="Back to top">
              <Logo />
            </a>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-cream/45">
              A Karachi-based development company creating residential addresses of enduring
              value. Residencia is our signature project in Clifton.
            </p>
            <a
              href="#top"
              className="mt-7 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/50 transition hover:text-gold"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">
              Explore
            </p>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs text-cream/55 transition hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-xs leading-relaxed text-cream/55">
              <a href={site.phoneHref} className="block transition hover:text-gold">
                {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="block transition hover:text-gold">
                {site.email}
              </a>
              <p className="max-w-xs">{site.address}</p>
              <p>{site.website}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-cream/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {credits.map(([label, value]) => (
            <div key={label}>
              <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-cream/30">
                {label}
              </p>
              <p className="mt-1.5 text-[11px] text-cream/55">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-cream/10 pt-8">
          <p className="max-w-5xl text-[9px] leading-relaxed text-cream/30">
            Disclaimer: The views, plans and layout shown are artist&rsquo;s impressions only.
            Centric Gazdar Residencia reserves the right to change these specifications, plans
            and amenities without prior notice in the interest of quality and timely delivery.
            We assure that any such changes made will not, in any way, be detrimental to the
            quality of the building.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-[9px] uppercase tracking-[0.18em] text-cream/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
            <p>Visualised by Render 360</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
