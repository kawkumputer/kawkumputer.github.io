import { Lang } from './content.model';

export type SectionId = 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'contact';

/** Libellés de l'interface (menus, boutons, titres de sections, formulaire). */
export const ui = {
  fr: {
    langName: 'Français',
    skipLink: 'Aller au contenu',
    home: 'Accueil — Hamath Kane',
    mainNav: 'Navigation principale',
    langSwitch: 'Choix de la langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      education: 'Formation',
      contact: 'Contact',
    } satisfies Record<SectionId, string>,
    hero: { cv: 'Télécharger mon CV', contact: 'Me contacter' },
    sections: {
      about: { eyebrow: '01', title: 'À propos' },
      skills: { eyebrow: '02', title: 'Compétences' },
      experience: { eyebrow: '03', title: 'Expérience' },
      projects: { eyebrow: '04', title: 'Projets' },
      education: { eyebrow: '05', title: 'Formation' },
      contact: { eyebrow: '06', title: 'Contact' },
    } satisfies Record<SectionId, { eyebrow: string; title: string }>,
    projects: {
      more: 'D’autres projets arrivent',
      moreText: 'Retrouvez mes travaux en cours sur GitHub et Hugging Face.',
    },
    contact: {
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi…',
      success: 'Merci ! Votre message a bien été envoyé.',
      successPulaar: 'A jaaraama !',
      error: 'L’envoi a échoué. Réessayez ou écrivez-moi directement.',
      notConfigured: 'Formulaire non configuré (TODO : formspreeId dans content/profile.ts). Visible en dev uniquement.',
      elsewhere: 'Ou retrouvez-moi sur',
    },
    footer: {
      thanks: 'Merci de votre visite',
      backToTop: 'Retour en haut',
      madeWith: 'Conçu avec Angular',
    },
  },
  en: {
    langName: 'English',
    skipLink: 'Skip to content',
    home: 'Home — Hamath Kane',
    mainNav: 'Main navigation',
    langSwitch: 'Choose language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: { cv: 'Download my resume', contact: 'Get in touch' },
    sections: {
      about: { eyebrow: '01', title: 'About me' },
      skills: { eyebrow: '02', title: 'Skills' },
      experience: { eyebrow: '03', title: 'Experience' },
      projects: { eyebrow: '04', title: 'Projects' },
      education: { eyebrow: '05', title: 'Education' },
      contact: { eyebrow: '06', title: 'Contact' },
    },
    projects: {
      more: 'More projects on the way',
      moreText: 'Follow my ongoing work on GitHub and Hugging Face.',
    },
    contact: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      success: 'Thank you! Your message has been sent.',
      successPulaar: 'A jaaraama!',
      error: 'Sending failed. Please try again or email me directly.',
      notConfigured: 'Form not configured (TODO: formspreeId in content/profile.ts). Visible in dev only.',
      elsewhere: 'Or find me on',
    },
    footer: {
      thanks: 'Thanks for visiting',
      backToTop: 'Back to top',
      madeWith: 'Built with Angular',
    },
  },
} satisfies Record<Lang, unknown>;

export type UiStrings = (typeof ui)['fr'];

// Garantit que la version anglaise a exactement les mêmes clés que la version française.
const _enMatchesFr: UiStrings = ui.en;
