import { whatsappHref } from '../data/site';

export function WhatsAppIcon({
  className = '',
  strokeWidth,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 17.44c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.98 2.43.02 1.43 1.04 2.82 1.18 3.01.14.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
      <path d="M16.03 4.5c-6.35 0-11.52 5.16-11.52 11.5 0 2.03.53 4.01 1.54 5.76L4.5 27.5l5.9-1.55a11.53 11.53 0 0 0 5.63 1.46h.01c6.35 0 11.52-5.16 11.52-11.5S22.38 4.5 16.03 4.5zm0 20.95h-.01c-1.77 0-3.5-.47-5.01-1.37l-.36-.21-3.72.98 1-3.63-.23-.37a9.52 9.52 0 0 1-1.46-5.09c0-5.26 4.29-9.54 9.57-9.54 2.56 0 4.96 1 6.77 2.8a9.48 9.48 0 0 1 2.8 6.75c0 5.26-4.29 9.54-9.57 9.54z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
      aria-label="Chat with Centric Gazdar on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 motion-safe:animate-ping" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-cream px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
}
