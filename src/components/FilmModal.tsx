import { useEffect } from 'react';
import { X } from 'lucide-react';

type FilmModalProps = {
  open: boolean;
  onClose: () => void;
};

export function FilmModal({ open, onClose }: FilmModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="The Residencia film"
      className="fixed inset-0 z-[130] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            The Residencia Film
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
            aria-label="Close film"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <video
          className="max-h-[76vh] w-full bg-black object-contain"
          src="/media/residencia-film.mp4"
          poster="/images/film-poster.webp"
          controls
          autoPlay
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
