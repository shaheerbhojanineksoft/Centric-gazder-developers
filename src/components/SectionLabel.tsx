import type { ReactNode } from 'react';

type SectionLabelProps = {
  index?: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionLabel({
  index,
  children,
  tone = 'light',
  className = '',
}: SectionLabelProps) {
  const color = tone === 'light' ? 'text-gold' : 'text-gold-deep';

  return (
    <div className={`flex items-center gap-3 ${color} ${className}`}>
      {index && (
        <>
          <span className="text-[10px] font-semibold tracking-[0.28em]">{index}</span>
          <span className="h-px w-8 bg-current opacity-50" />
        </>
      )}
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-[11px]">
        {children}
      </span>
    </div>
  );
}
