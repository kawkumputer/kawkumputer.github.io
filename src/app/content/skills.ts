import { SkillGroup } from './content.model';

export const skillGroups: SkillGroup[] = [
  {
    icon: 'server',
    title: 'Back-end',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate / JPA',
      'API REST',
      'GraphQL',
      { fr: 'Microservices', en: 'Microservices' },
    ],
  },
  {
    icon: 'layout',
    title: { fr: 'Front-end & mobile', en: 'Front-end & mobile' },
    skills: ['Angular', 'TypeScript', 'NgRx', 'Micro-frontends', 'Flutter', 'React Native'],
  },
  {
    icon: 'database',
    title: { fr: 'Données & messaging', en: 'Data & messaging' },
    skills: ['PostgreSQL', 'Oracle', 'Elasticsearch', 'Apache Kafka', 'CQRS', 'MuleSoft'],
  },
  {
    icon: 'git',
    title: 'DevOps & CI/CD',
    skills: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Ansible', 'Prometheus / Grafana'],
  },
  {
    icon: 'cpu',
    title: { fr: 'IA & NLP', en: 'AI & NLP' },
    skills: [
      { fr: 'Traduction automatique', en: 'Machine translation' },
      'NLLB-200',
      { fr: 'Fine-tuning LoRA', en: 'LoRA fine-tuning' },
      'Hugging Face',
      { fr: 'Constitution de corpus', en: 'Corpus building' },
    ],
  },
  {
    icon: 'shield',
    title: { fr: 'Qualité & méthodes', en: 'Quality & methods' },
    skills: ['JUnit', 'TDD', 'SOLID', 'SonarQube', 'Code review', 'Scrum / Kanban'],
  },
];
