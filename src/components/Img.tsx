type ImgProps = {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const widths = [640, 960, 1920];

export function Img({ name, alt, className, sizes = '100vw', priority = false }: ImgProps) {
  const srcSet = widths.map((width) => `/images/${name}-${width}.webp ${width}w`).join(', ');

  return (
    <img
      src={`/images/${name}-1920.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
