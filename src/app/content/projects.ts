import { Project } from './content.model';

/**
 * Projets affichés dans la section « Projets ».
 * Pour en ajouter un : copie le modèle en bas du fichier dans le tableau.
 * Types de liens possibles : 'github' | 'huggingface' | 'playstore' | 'appstore' | 'website'.
 */
export const projects: Project[] = [
  {
    id: 'pulaar-translate',
    title: 'Pulaar Translate',
    status: { fr: 'IA · co-fondateur', en: 'AI · co-founder' },
    description: {
      fr: 'IA de traduction français ↔ pulaar, obtenue par fine-tuning de NLLB-200 (600M) avec LoRA, publiée sur Hugging Face et améliorée sur plus de 10 itérations.',
      en: 'French ↔ Pulaar AI translation, fine-tuned from NLLB-200 (600M) with LoRA, published on Hugging Face and refined over 10+ iterations.',
    },
    highlights: [
      {
        fr: 'Corpus d’environ 8 000 paires de phrases, validé par un locuteur natif',
        en: 'A corpus of about 8,000 sentence pairs, validated by a native speaker',
      },
      {
        fr: 'Site public bilingue qui collecte les corrections des utilisateurs pour enrichir l’entraînement',
        en: 'Public bilingual website that collects user corrections to improve training data',
      },
    ],
    tags: ['NLLB-200', 'LoRA', 'Hugging Face', 'NLP'],
    links: [
      { kind: 'website', label: 'pulaar-translate.com', url: 'https://pulaar-translate.com' },
      // TODO : remplace par l'URL exacte du modèle si tu veux pointer dessus directement.
      { kind: 'huggingface', label: 'Hugging Face', url: 'https://huggingface.co/kawkumputer' },
    ],
  },
  {
    id: 'quraan-pulaar',
    title: 'Quraan Pulaar',
    status: { fr: 'Application mobile', en: 'Mobile app' },
    description: {
      fr: 'Application Android / iOS de lecture du Coran avec sa traduction en pulaar, publiée sur Google Play et l’App Store.',
      en: 'Android / iOS app for reading the Quran with its Pulaar translation, published on Google Play and the App Store.',
    },
    highlights: [
      {
        fr: 'Back-end Spring Boot / PostgreSQL (inscription et validation par code)',
        en: 'Spring Boot / PostgreSQL back-end (sign-up with code verification)',
      },
      {
        fr: 'Hébergement cloud : Docker, Kubernetes, NGINX, CI Jenkins, supervision Prometheus / Grafana',
        en: 'Cloud hosting: Docker, Kubernetes, NGINX, Jenkins CI, Prometheus / Grafana monitoring',
      },
    ],
    tags: ['React Native', 'Spring Boot', 'PostgreSQL', 'Kubernetes'],
    links: [
      { kind: 'playstore', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=mr.quran_pulaar' },
      { kind: 'appstore', label: 'App Store', url: 'https://apps.apple.com/us/app/quraan-pulaar/id6742410170' },
    ],
  },
  {
    id: 'learn-pulaar',
    title: 'Learn Pulaar',
    status: { fr: 'Application mobile', en: 'Mobile app' },
    description: {
      fr: 'Application Flutter d’apprentissage du pulaar (dialecte du Fouta-Toro), bilingue français / anglais : leçons de grammaire et modules de vocabulaire, avec une architecture extensible à d’autres langues.',
      en: 'Flutter app for learning Pulaar (Fuuta Tooro dialect), bilingual French / English: grammar lessons and vocabulary modules, with an architecture that can extend to other languages.',
    },
    tags: ['Flutter', 'Dart', 'Pulaar'],
    links: [
      { kind: 'playstore', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.pulaarai.learn_pulaar' },
      { kind: 'appstore', label: 'App Store', url: 'https://apps.apple.com/us/app/learn-pulaar/id6783795490' },
    ],
  },
  {
    id: 'hadisaaji-pulaar',
    title: 'Hadisaaji Pulaar',
    status: { fr: 'Application mobile', en: 'Mobile app' },
    // TODO : vérifie cette description (je ne connais pas le contenu exact de l'application).
    description: {
      fr: 'Application mobile de hadiths en pulaar, disponible sur Android et iOS.',
      en: 'Mobile app of hadiths in Pulaar, available on Android and iOS.',
    },
    tags: ['Mobile', 'Pulaar'],
    links: [
      { kind: 'playstore', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hadisaaji.hadisaaji' },
      { kind: 'appstore', label: 'App Store', url: 'https://apps.apple.com/us/app/hadisaaji-pulaar/id6759843030' },
    ],
  },

  // --- Modèle pour ajouter un projet ---
  // {
  //   id: 'mon-projet',
  //   title: 'Mon projet',
  //   status: { fr: 'Application web', en: 'Web app' },
  //   description: { fr: 'Description en français.', en: 'English description.' },
  //   tags: ['Angular', 'Spring Boot'],
  //   links: [{ kind: 'github', label: 'GitHub', url: 'https://github.com/kawkumputer/mon-projet' }],
  // },
];
