import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { site, whatsappHref } from '../data/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'border-b border-cream/10 bg-ink/95 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-cg flex h-20 items-center justify-between">
          <a href="#top" aria-label="Centric Gazdar home" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream/70 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="btn-gold !px-5 !py-2.5"
            >
              Enquire
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-28 transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {site.nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-cream/10 py-5"
            >
              <span className="font-serif text-4xl text-cream transition-colors group-hover:text-gold">
                {item.label}
              </span>
              <span className="text-[10px] tracking-[0.24em] text-gold">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-4 pt-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
            {site.location}
          </p>
          <a
            href={site.phoneHref}
            className="block font-serif text-3xl text-cream"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={site.emailHref}
            className="block text-sm text-cream/60"
          >
            {site.email}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-2 w-full"
          >
            Enquire on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
