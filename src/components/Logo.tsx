type LogoProps = {
  className?: string;
  tone?: 'light' | 'dark';
  compact?: boolean;
};

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M32 2.5 60 18.5v35L32 69.5 4 53.5v-35L32 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M20 25h24M20 31.5h24M20 38h24M20 44.5h16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
      <path
        d="M25 20.5h14M25 25v24M39 25v24"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity=".55"
      />
    </svg>
  );
}

export function Logo({ className = '', tone = 'light', compact = false }: LogoProps) {
  const nameClass = tone === 'light' ? 'text-cream' : 'text-ink';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-auto shrink-0 text-gold" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[18px] font-semibold uppercase tracking-[0.13em] sm:text-[20px] ${nameClass}`}
        >
          Centric Gazdar
        </span>
        {!compact && (
          <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.34em] text-gold sm:text-[8px]">
            Builders &amp; Developers
          </span>
        )}
      </span>
    </span>
  );
}
