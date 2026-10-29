import type { IconName } from '../shared/icon/icons';

/** Langues du site. Le pulaar est utilisé en touches ponctuelles (attribut lang="ff"). */
export type Lang = 'fr' | 'en';
export const LANGS: readonly Lang[] = ['fr', 'en'];

/** Texte traduit, ou texte identique dans toutes les langues. */
export type Localized = string | Record<Lang, string>;

export type LinkKind =
  | 'github'
  | 'linkedin'
  | 'huggingface'
  | 'facebook'
  | 'email'
  | 'playstore'
  | 'appstore'
  | 'website';

/**
 * Un lien externe. Toute URL commençant par "TODO" est considérée comme non renseignée :
 * le lien n'est pas affiché sur le site (et un avertissement apparaît en dev).
 */
export interface Link {
  kind: LinkKind;
  label: Localized;
  url: string;
}

export interface Highlight {
  value: Localized;
  label: Localized;
}

export interface Commitment {
  icon: IconName;
  title: Localized;
  text: Localized;
}

export interface Profile {
  name: string;
  title: Localized;
  tagline: Localized;
  /** Message d'accueil en pulaar, avec sa traduction. */
  greeting: { pulaar: string; translation: Localized };
  photo: { src: string; alt: Localized; width: number; height: number };
  cvUrl: string;
  email: string;
  socials: Link[];
  about: {
    paragraphs: Localized[];
    highlights: Highlight[];
    commitments: Commitment[];
  };
  /** Citation mise en avant, avec sa traduction en pulaar. */
  quote: {
    original: string;
    originalLang: string;
    pulaar: string;
    author: string;
    credit: Localized;
  };
  contact: {
    /** Identifiant du formulaire Formspree (la partie après https://formspree.io/f/). */
    formspreeId: string;
    intro: Localized;
  };
}

export interface SkillGroup {
  icon: IconName;
  title: Localized;
  skills: Localized[];
}

export interface Experience {
  role: Localized;
  context: Localized;
  period: Localized;
  description: Localized;
  highlights: Localized[];
  tags: string[];
}

export interface Project {
  id: string;
  title: Localized;
  status?: Localized;
  description: Localized;
  highlights?: Localized[];
  tags: string[];
  links: Link[];
}

export interface Education {
  degree: Localized;
  school: string;
  /** Laisser vide pour ne pas afficher d'année. */
  year: string;
  description?: Localized;
}
