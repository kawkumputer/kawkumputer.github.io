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
      fr: 'Offre de paiement en ligne pour les commerçants d’une grande banque de détail : le conseiller crée, tarife, fait signer puis suit le contrat qui permet au commerçant d’accepter les paiements par carte sur son site.',
      en: 'Online payment offer for the merchants of a major retail bank: the adviser creates, prices, gets signed and then tracks the contract that lets a merchant accept card payments on their website.',
    },
    highlights: [
      {
        fr: 'Parcours de bout en bout : souscription (entreprise, point de vente, signataires), profil d’activité pour évaluer le risque, tarification, signature, puis consultation et modification synchronisées avec le système central',
        en: 'End-to-end journey: subscription (company, point of sale, signatories), activity profile to assess risk, pricing, signature, then consultation and amendments kept in sync with the core banking system',
      },
      {
        fr: 'API REST Java / Spring Boot en couches, sécurisée par OAuth2 (JWT, scopes), avec PostgreSQL et accès au mainframe (CICS, DB2)',
        en: 'Layered Java / Spring Boot REST API secured with OAuth2 (JWT, scopes), backed by PostgreSQL and mainframe access (CICS, DB2)',
      },
      {
        fr: 'Intégrations avec les services internes (référentiel clients, paiement) et génération des documents contractuels',
        en: 'Integrations with internal services (customer reference data, payments) and generation of contract documents',
      },
      {
        fr: 'Qualité et livraison : JUnit 5, Mockito, JaCoCo, tests fonctionnels Bruno, OpenAPI, déploiement Kubernetes sur plusieurs environnements',
        en: 'Quality and delivery: JUnit 5, Mockito, JaCoCo, Bruno functional tests, OpenAPI, Kubernetes deployments across environments',
      },
      {
        fr: 'Référent IA de la squad : création d’agents et de skills pour automatiser les tâches et accélérer le développement assisté par IA',
        en: 'Squad AI lead: built AI agents and skills to automate tasks and speed up AI-assisted development',
      },
    ],
    tags: ['Java', 'Spring Boot', 'OAuth2', 'PostgreSQL', 'Kubernetes', 'Angular', 'AI agents'],
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
