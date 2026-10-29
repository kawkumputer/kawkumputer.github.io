import { Lang } from './content.model';

/** URL publique du site, sans slash final. Sert aux balises canonical, hreflang et Open Graph. */
export const siteUrl = 'https://kawkumputer.github.io';

/** Image d'aperçu (Facebook, LinkedIn…) : 1200 × 630, dans public/. */
export const ogImage = { path: 'assets/img/og-image.png', width: 1200, height: 630 };

export const seo: Record<
  Lang,
  { title: string; description: string; ogImageAlt: string; locale: string }
> = {
  fr: {
    title: 'Hamath Kane — Ingénieur informatique & IA',
    description:
      "Portfolio de Hamath Kane, ingénieur fullstack Java / Spring Boot / Angular (8 ans d'expérience) et IA. La tech & l'IA au service du pulaar : traduction automatique et applications mobiles.",
    ogImageAlt: "Hamath Kane — Ingénieur informatique & IA. La tech & l'IA au service du pulaar.",
    locale: 'fr_FR',
  },
  en: {
    title: 'Hamath Kane — Software & AI Engineer',
    description:
      'Portfolio of Hamath Kane, fullstack Java / Spring Boot / Angular engineer (8 years of experience) and AI engineer. Tech & AI in service of the Pulaar language: machine translation and mobile apps.',
    ogImageAlt: 'Hamath Kane — Software & AI Engineer. Tech & AI in service of the Pulaar language.',
    locale: 'en_US',
  },
};
