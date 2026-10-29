import { Profile } from './content.model';

/**
 * Identité, liens et texte « À propos ».
 * Les valeurs commençant par "TODO" sont masquées sur le site tant qu'elles ne sont pas remplies.
 */
export const profile: Profile = {
  name: 'Hamath Kane',
  title: { fr: 'Ingénieur informatique & IA', en: 'Software & AI Engineer' },
  tagline: {
    fr: "La tech & l'IA au service du pulaar",
    en: 'Tech & AI in service of the Pulaar language',
  },

  // Pulaar — formulation à valider.
  greeting: { pulaar: 'Bisimilla !', translation: { fr: 'Bienvenue', en: 'Welcome' } },

  // Photo carrée (640 px conseillé) dans public/assets/img/.
  photo: {
    src: 'assets/img/profile.jpg',
    alt: { fr: 'Portrait de Hamath Kane', en: 'Portrait of Hamath Kane' },
    width: 320,
    height: 320,
  },

  // CV téléchargeable, dans public/assets/cv/.
  cvUrl: 'assets/cv/CV-Hamath-Kane.pdf',

  email: 'kawkumputer@gmail.com',

  socials: [
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hamath-kane-715387140',
    },
    { kind: 'github', label: 'GitHub', url: 'https://github.com/kawkumputer' },
    { kind: 'huggingface', label: 'Hugging Face', url: 'https://huggingface.co/kawkumputer' },
    { kind: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61596214702664' },
  ],

  about: {
    paragraphs: [
      {
        fr: "Ingénieur informatique titulaire d'un Master 2, je conçois et développe depuis 8 ans des applications métier à forts enjeux, du back-end Java / Spring Boot aux interfaces Angular et aux applications mobiles.",
        en: 'A software engineer with a Master’s degree, I have spent 8 years designing and building business-critical applications, from Java / Spring Boot back-ends to Angular interfaces and mobile apps.',
      },
      {
        fr: "Consultant, j'interviens dans la banque et la monétique, la finance durable, la santé, le commerce international et l'aéronautique : architectures microservices (REST, GraphQL, Kafka, CQRS), migration de systèmes legacy et industrialisation CI/CD (Jenkins, Docker, Kubernetes). Je suis attaché à la qualité du code (TDD, SOLID, SonarQube), à l'agilité Scrum et à l'accompagnement des développeurs juniors.",
        en: 'As a consultant, I work across banking and card payments, sustainable finance, healthcare, international trade and aerospace: microservice architectures (REST, GraphQL, Kafka, CQRS), legacy system migrations and CI/CD automation (Jenkins, Docker, Kubernetes). I care about code quality (TDD, SOLID, SonarQube), Scrum and mentoring junior developers.',
      },
      {
        fr: "En parallèle, je conçois bénévolement des outils numériques pour rendre le pulaar accessible au plus grand nombre : traduction automatique par IA, contenus religieux et apprentissage de la langue.",
        en: 'Alongside this, I volunteer my time building digital tools that make the Pulaar language accessible to everyone: AI machine translation, religious content and language learning.',
      },
    ],
    highlights: [
      { value: '8', label: { fr: "ans d'expérience fullstack", en: 'years of fullstack experience' } },
      { value: 'M2', label: { fr: "Master Systèmes d'Information", en: 'MSc in Information Systems' } },
      {
        value: { fr: '8 000', en: '8,000' },
        label: { fr: 'paires de phrases français ↔ pulaar', en: 'French ↔ Pulaar sentence pairs' },
      },
    ],
    commitments: [
      {
        icon: 'code',
        title: { fr: 'Ingénierie logicielle', en: 'Software engineering' },
        text: {
          fr: 'Applications robustes et maintenables pour des environnements exigeants.',
          en: 'Robust, maintainable applications for demanding environments.',
        },
      },
      {
        icon: 'language',
        title: { fr: 'Promotion du pulaar', en: 'Promoting Pulaar' },
        text: {
          fr: "Des outils et des modèles d'IA pour faire vivre le pulaar en ligne.",
          en: 'Tools and AI models to help Pulaar thrive online.',
        },
      },
    ],
  },

  quote: {
    original:
      'Everyone in this country should learn how to program a computer because it teaches you how to think.',
    originalLang: 'en',
    pulaar:
      'Mo woni kala e ndii leydi, ina foti jangude hol no ordinater heblirtee, sabu ina jangin-ma waawde miijaade.',
    author: 'Steve Jobs',
    credit: {
      fr: 'Traduction approximative en pulaar par Hamath Kane',
      en: 'Approximate Pulaar translation by Hamath Kane',
    },
  },

  contact: {
    // TODO : crée un formulaire sur https://formspree.io et colle ici son identifiant (ex. 'xyzabcd').
    formspreeId: 'TODO_FORMSPREE_ID',
    intro: {
      fr: "Un projet, une mission de conseil, une collaboration autour du pulaar ? Écrivez-moi, je réponds rapidement.",
      en: 'A project, a consulting engagement, a collaboration around Pulaar? Drop me a line — I reply quickly.',
    },
  },
};
