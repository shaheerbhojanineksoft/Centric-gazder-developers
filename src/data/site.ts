export const site = {
  company: 'Centric Gazdar',
  legalName: 'Centric Gazdar Builders & Developers',
  tagline: 'Builders & Developers',
  director: 'Zaid Gazdar',
  phoneDisplay: '+92 300 2511927',
  phoneHref: 'tel:+923002511927',
  email: 'zaid@centricgazdar.com.pk',
  emailHref: 'mailto:zaid@centricgazdar.com.pk',
  website: 'www.centricgazdar.com.pk',
  address: 'FT4, 6/2, Mary Road, Bath Island, Frere Town, Karachi',
  location: 'Clifton, Karachi',
  whatsappNumber: '923002511927',
  mapQuery: 'FT4, 6/2, Mary Road, Bath Island, Frere Town, Karachi',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'The Residencia', href: '#residencia' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export const defaultWhatsAppMessage =
  "Hello Centric Gazdar, I'm interested in Centric Gazdar Residencia. Please share more details.";

export function whatsappHref(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapEmbedHref(query: string = site.mapQuery): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function mapSearchHref(query: string = site.mapQuery): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
