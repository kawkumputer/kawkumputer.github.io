# Portfolio — Hamath Kane

Site personnel de **Hamath Kane**, ingénieur informatique & IA — *La tech & l'IA au service du pulaar*.

- **Stack** : Angular 22 (composants standalone, signals, zoneless), SCSS, prérendu statique (SSG)
- **Langues** : français (`/fr/`, par défaut) et anglais (`/en/`), avec des touches de pulaar
- **Hébergement** : GitHub Pages → <https://kawkumputer.github.io/>

---

## 1. Lancer le projet

Prérequis : **Node.js 22.22+ ou 24+** (Angular 22 l'exige).

```bash
npm install
npm start            # serveur de dev → http://localhost:4200/fr
```

Pour tester la version de production telle qu'elle sera en ligne :

```bash
npm run build        # génère dist/my-portfolio/browser (pages /fr et /en prérendues)
npm run preview      # sert ce dossier → http://localhost:8080/fr/
```

En développement, la console du navigateur liste toutes les valeurs encore à `TODO`.

---

## 2. Modifier le contenu

**Tout le contenu se trouve dans [`src/app/content/`](src/app/content/).** Il n'est pas nécessaire de toucher aux composants.

| Fichier | Contenu |
| --- | --- |
| [`profile.ts`](src/app/content/profile.ts) | Nom, titre, accroche, salutation en pulaar, photo, CV, email, réseaux sociaux, texte « À propos », Formspree |
| [`skills.ts`](src/app/content/skills.ts) | Groupes de compétences |
| [`experience.ts`](src/app/content/experience.ts) | Timeline des missions (de la plus récente à la plus ancienne) |
| [`projects.ts`](src/app/content/projects.ts) | Projets (un modèle à copier se trouve en bas du fichier) |
| [`education.ts`](src/app/content/education.ts) | Diplômes |
| [`ui.ts`](src/app/content/ui.ts) | Libellés de l'interface : menu, boutons, titres de sections, formulaire |
| [`seo.ts`](src/app/content/seo.ts) | Titre et description pour Google, Facebook et LinkedIn, URL du site |

### Textes traduits

Un texte peut être identique dans les deux langues, ou traduit :

```ts
title: 'Backend',                                                       // identique en FR et EN
title: { fr: 'Ingénieur informatique & IA', en: 'Software & AI Engineer' }, // traduit
```

TypeScript signale une erreur si une traduction manque ou si un champ est mal nommé : `npm run build` sert donc aussi de vérification.

### Ajouter un projet

Dans [`projects.ts`](src/app/content/projects.ts), ajoute un objet au tableau :

```ts
{
  id: 'mon-projet',                          // identifiant unique, sans espaces
  title: 'Mon projet',
  status: { fr: 'Application web', en: 'Web app' },
  description: { fr: '…', en: '…' },
  highlights: [{ fr: '…', en: '…' }],        // facultatif
  tags: ['Angular', 'Spring Boot'],
  links: [
    { kind: 'github', label: 'GitHub', url: 'https://github.com/kawkumputer/mon-projet' },
  ],
},
```

Types de liens possibles : `github`, `huggingface`, `playstore`, `appstore`, `website`.

### Règle des `TODO`

**Toute valeur qui commence par `TODO` est masquée sur le site** : lien, bouton CV, période d'une expérience. Aucun lien cassé n'est donc publié. Il suffit de remplacer la valeur pour que l'élément apparaisse.

### À compléter

| Où | Quoi |
| --- | --- |
| `profile.ts` → `socials` (facebook) | URL de ta page Facebook. |
| `profile.ts` → `contact.formspreeId` | Crée un formulaire gratuit sur [formspree.io](https://formspree.io) et colle son identifiant (la partie après `https://formspree.io/f/`). **Tant qu'il manque, le formulaire n'est visible qu'en dev.** |
| `projects.ts` | URLs Google Play et App Store de Quraan Pulaar ; URL exacte du modèle Hugging Face si tu veux pointer dessus directement. |

**Mettre à jour le CV ou la photo** : remplace `public/assets/cv/CV-Hamath-Kane.pdf` ou `public/assets/img/profile.jpg` en gardant le même nom (photo carrée, 640 px conseillé). Attention : le CV en ligne est public, avec tout ce qu'il contient (téléphone, noms de clients…).
| Textes en pulaar | `Bisimilla !` (hero), `Jaaraama` (pied de page), `A jaaraama !` (confirmation du formulaire) : **formulations à valider**. Elles se trouvent dans `profile.ts`, `ui.ts` et `layout/footer/footer.html`. |

### Image d'aperçu (Facebook / LinkedIn)

[`public/assets/img/og-image.png`](public/assets/img/og-image.png) (1200 × 630) s'affiche quand on partage le lien. Pour la remplacer, garde le même nom et les mêmes dimensions, ou mets à jour `ogImage` dans `seo.ts`.

Après le déploiement, force la mise à jour de l'aperçu avec le [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) et le [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

---

## 3. Déployer sur GitHub Pages

Le site est prévu pour le dépôt **`kawkumputer.github.io`**, servi à la racine : <https://kawkumputer.github.io/>.

1. Crée le dépôt `kawkumputer.github.io` sur GitHub, puis pousse le code sur la branche `main` :
   ```bash
   git remote add origin https://github.com/kawkumputer/kawkumputer.github.io.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. Chaque `push` sur `main` déclenche [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) : installation, build, prérendu, puis publication. Tu peux aussi le lancer à la main depuis l'onglet **Actions**.

> **Domaine personnalisé ou autre nom de dépôt** : si le site n'est plus servi à la racine (par ex. `https://kawkumputer.github.io/portfolio/`), il faut ajouter `--base-href /portfolio/` à la commande `ng build` dans `package.json`. Pense aussi à mettre à jour `siteUrl` dans `seo.ts`, ainsi que `public/sitemap.xml` et `public/robots.txt`.

---

## 4. Fonctionnement (pour aller plus loin)

```
src/
├── app/
│   ├── content/        ← le contenu (voir plus haut)
│   ├── core/           i18n (langue courante), pipe l10n, SEO (meta, Open Graph, hreflang, JSON-LD), TODO
│   ├── layout/         en-tête (menu, sélecteur FR/EN) et pied de page
│   ├── sections/       hero, about, skills, experience, projects, education, contact
│   ├── shared/         icônes SVG, titre de section, liens sociaux
│   └── pages/home/     assemble les sections ; la langue vient de la route
└── styles/             tokens (couleurs, typo), mixins (breakpoints), styles globaux
scripts/postbuild.mjs   crée 404.html et .nojekyll pour GitHub Pages
```

- **SEO** : `/fr/` et `/en/` sont prérendues en HTML complet au build, avec `title`, `description`, Open Graph, Twitter Card, `canonical`, `hreflang` et des données structurées `Person`. `/` redirige vers `/fr/`, et toute URL inconnue aussi (via `404.html`).
- **Performance** : seul le hero est hydraté au chargement ; chaque autre section l'est lorsqu'elle arrive à l'écran (`@defer (hydrate on viewport)`). Le fond animé démarre après le chargement, à 30 images/s, et se met en pause hors écran.
- **Animations** : l'apparition au scroll est 100 % CSS (`animation-timeline: view()`). Elle est désactivée si l'utilisateur préfère réduire les animations, et le contenu reste simplement visible sur les navigateurs qui ne la prennent pas en charge.
- **Accessibilité** : lien d'évitement, focus visible, navigation au clavier (la touche Échap ferme le menu), contrastes AA, `lang="ff"` sur les passages en pulaar.

---

## 5. Fichiers conservés de l'ancien site

Le dépôt hébergeait auparavant la page d'assistance de Quraan Pulaar. Ces fichiers sont conservés dans `public/` et restent servis tels quels :

| URL | Fichier |
| --- | --- |
| `/privacy.html` | Politique de confidentialité (même adresse qu'avant) |
| `/app-ads.txt` | Déclaration AdMob (même adresse qu'avant) |
| `/support.html` | Ancienne page d'accueil « Quraan Pulaar - Support » (**l'adresse a changé** : elle était à la racine `/`, qui redirige maintenant vers `/fr/`) |
