import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && images.length > 1) {
        onNavigate((index + 1) % images.length);
      }
      if (event.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [index, images.length, onClose, onNavigate]);

  if (index === null) return null;

  const image = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption ?? image.alt}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-gold hover:text-gold sm:right-6 sm:top-6"
        aria-label="Close image"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="flex max-h-full w-full max-w-6xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[76vh] w-auto max-w-full object-contain"
        />
        <div className="mt-5 flex w-full items-center justify-between gap-4">
          {image.caption ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70">
              {image.caption}
            </p>
          ) : (
            <span />
          )}
          {images.length > 1 && (
            <div className="flex items-center gap-2">
              <span className="mr-2 text-[10px] tracking-[0.2em] text-cream/50">
                {index + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => onNavigate((index - 1 + images.length) % images.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate((index + 1) % images.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
