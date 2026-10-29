import { Experience } from './content.model';

/**
 * Expériences, de la plus récente à la plus ancienne.
 * Descriptions volontairement génériques (pas de nom de client).
 * Une période laissée à "TODO…" n'est pas affichée.
 */
export const experiences: Experience[] = [
  {
    role: { fr: 'Consultant développeur full stack Java / Angular', en: 'Full stack Java / Angular consultant' },
    context: { fr: 'Banque — monétique', en: 'Banking — card payments' },
    period: { fr: 'Avr. 2025 — aujourd’hui', en: 'Apr. 2025 — present' },
    description: {
      fr: 'Application utilisée par les conseillers d’un réseau d’agences bancaires pour ouvrir les contrats monétiques de leurs clients (acceptation des paiements par carte et en ligne).',
      en: 'Application used by advisers across a retail bank’s branch network to open card-acceptance and online-payment contracts for their clients.',
    },
    highlights: [
      {
        fr: 'Parcours de souscription côté conseiller (Angular) et services back-end associés (Java / Spring Boot)',
        en: 'Built adviser-facing subscription journeys (Angular) and their back-end services (Java / Spring Boot)',
      },
      {
        fr: 'Intégration d’une plateforme de paiement et de services partenaires via API REST',
        en: 'Integrated a payment platform and partner services through REST APIs',
      },
      {
        fr: 'Orchestration et sécurisation des échanges inter-services (Spring Security)',
        en: 'Orchestrated and secured inter-service calls (Spring Security)',
      },
    ],
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'Jenkins', 'SonarQube'],
  },
  {
    role: { fr: 'Consultant développeur full stack Java / Angular', en: 'Full stack Java / Angular consultant' },
    context: { fr: 'Institution financière publique — finance durable', en: 'Public financial institution — sustainable finance' },
    period: { fr: 'Sept. 2024 — avr. 2025', en: 'Sept. 2024 — Apr. 2025' },
    description: {
      fr: 'Application de gestion de la taxonomie verte européenne (règlement UE 2020/852), qui qualifie la durabilité des activités et des investissements.',
      en: 'Application managing the EU green taxonomy (Regulation (EU) 2020/852), used to assess the sustainability of activities and investments.',
    },
    highlights: [
      {
        fr: 'Qualification de l’éligibilité et de l’alignement des activités aux critères de la taxonomie',
        en: 'Features assessing the eligibility and alignment of activities with taxonomy criteria',
      },
      {
        fr: 'API REST Java / Spring Boot et écrans Angular de saisie, de consultation et de suivi',
        en: 'Java / Spring Boot REST APIs and Angular screens for data entry, consultation and tracking',
      },
    ],
    tags: ['Java', 'Spring Boot', 'Angular', 'API REST', 'Scrum'],
  },
  {
    role: { fr: 'Développeur full stack Java', en: 'Full stack Java developer' },
    context: { fr: 'Santé — flux de l’Assurance Maladie', en: 'Healthcare — French health insurance data flows' },
    period: { fr: 'Déc. 2022 — avr. 2024', en: 'Dec. 2022 — Apr. 2024' },
    description: {
      fr: 'Migration d’une plateforme critique qui reçoit les feuilles de soins électroniques des professionnels de santé et les transmet aux organismes d’Assurance Maladie.',
      en: 'Migration of a critical platform that receives electronic claims from healthcare professionals and forwards them to French health insurance bodies.',
    },
    highlights: [
      {
        fr: 'Modernisation complète de la stack legacy : Java 6 → 8, Spring 1.2 → 4, Mule ESB 1.3 → 3.9, JBoss → WildFly 17',
        en: 'Full legacy stack modernisation: Java 6 → 8, Spring 1.2 → 4, Mule ESB 1.3 → 3.9, JBoss → WildFly 17',
      },
      {
        fr: 'Migration SVN → GitLab avec reprise de l’historique, pipelines CI/CD Jenkins',
        en: 'SVN → GitLab migration with full history, Jenkins CI/CD pipelines',
      },
      {
        fr: 'Encadrement de développeurs juniors et animation de la communauté de pratique dev',
        en: 'Mentored junior developers and ran the developer community of practice',
      },
    ],
    tags: ['Java', 'Spring', 'MuleSoft', 'ActiveMQ', 'Oracle', 'Jenkins'],
  },
  {
    role: { fr: 'Développeur full stack Java Spring / Angular', en: 'Full stack Java Spring / Angular developer' },
    context: {
      fr: 'Éditeur de logiciels — commerce international, banque centrale, aéronautique',
      en: 'Software vendor — international trade, central banking, aerospace',
    },
    period: { fr: 'Mars 2019 — déc. 2022', en: 'Mar. 2019 — Dec. 2022' },
    description: {
      fr: 'Solution d’automatisation de la classification douanière, de l’origine préférentielle et des licences d’import/export, ainsi que des plateformes pour une banque centrale et pour la maintenance aéronautique.',
      en: 'A solution automating customs classification, preferential origin and import/export licences, plus platforms for a central bank and for aircraft maintenance.',
    },
    highlights: [
      {
        fr: 'Microservices Spring Boot (REST, GraphQL) et architecture CQRS : PostgreSQL, Kafka, Elasticsearch',
        en: 'Spring Boot microservices (REST, GraphQL) and a CQRS architecture: PostgreSQL, Kafka, Elasticsearch',
      },
      {
        fr: 'Étude et mise en place d’une architecture micro-frontend (Module Federation, Angular)',
        en: 'Designed and introduced a micro-frontend architecture (Module Federation, Angular)',
      },
      {
        fr: 'Pipelines CI/CD Jenkins / Docker / Kubernetes, déploiements DEV, UAT et PROD avec Ansible',
        en: 'Jenkins / Docker / Kubernetes CI/CD pipelines, DEV, UAT and PROD deployments with Ansible',
      },
    ],
    tags: ['Spring Boot', 'Kafka', 'Elasticsearch', 'Angular', 'NgRx', 'Kubernetes'],
  },
  {
    role: { fr: 'Développeur full stack Java', en: 'Full stack Java developer' },
    context: { fr: 'Distribution pharmaceutique', en: 'Pharmaceutical distribution' },
    period: { fr: 'Déc. 2016 — janv. 2018', en: 'Dec. 2016 — Jan. 2018' },
    description: {
      fr: 'Application web de gestion de stock et de facturation pour un grossiste pharmaceutique : analyse, conception, développement, mise en production et maintenance.',
      en: 'Stock management and invoicing web application for a pharmaceutical wholesaler: analysis, design, development, production rollout and maintenance.',
    },
    highlights: [],
    tags: ['Java EE', 'Struts 2', 'MySQL', 'JasperReports'],
  },
];
