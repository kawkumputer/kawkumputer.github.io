import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Lang } from '../../content/content.model';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { EducationSection } from '../../sections/education/education';
import { ExperienceSection } from '../../sections/experience/experience';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { Quote } from '../../sections/quote/quote';
import { Skills } from '../../sections/skills/skills';

@Component({
  selector: 'app-home-page',
  imports: [Hero, About, Quote, Skills, ExperienceSection, Projects, EducationSection, Contact],
  // Tout est prérendu en HTML (SEO). Chaque section est hydratée en petite tâche séparée,
  // lorsqu'elle arrive à l'écran (le hero aussitôt, mais sans bloquer le démarrage de l'app).
  template: `
    @defer (hydrate on viewport) {
      <app-hero />
    }
    @defer (hydrate on viewport) {
      <app-about />
    }
    @defer (hydrate on viewport) {
      <app-quote />
    }
    @defer (hydrate on viewport) {
      <app-skills />
    }
    @defer (hydrate on viewport) {
      <app-experience />
    }
    @defer (hydrate on viewport) {
      <app-projects />
    }
    @defer (hydrate on viewport) {
      <app-education />
    }
    @defer (hydrate on viewport) {
      <app-contact />
    }
  `,
})
export class HomePage {
  constructor() {
    const i18n = inject(I18nService);
    const seo = inject(SeoService);
    // La langue vient de la route (/fr ou /en) : on l'applique avant le rendu.
    inject(ActivatedRoute)
      .data.pipe(takeUntilDestroyed())
      .subscribe((data) => {
        const lang = data['lang'] as Lang;
        i18n.lang.set(lang);
        seo.update(lang);
      });
  }
}
