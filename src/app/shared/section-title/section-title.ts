import { Component, computed, inject, input } from '@angular/core';
import { SectionId } from '../../content/ui';
import { I18nService } from '../../core/i18n.service';

/** Titre de section numéroté. Son id (`<section>-title`) sert à aria-labelledby. */
@Component({
  selector: 'app-section-title',
  template: `
    <h2 class="title" [id]="section() + '-title'">
      <span class="title__num" aria-hidden="true">{{ labels().eyebrow }}.</span>
      {{ labels().title }}
    </h2>
  `,
  styleUrl: './section-title.scss',
})
export class SectionTitle {
  readonly section = input.required<SectionId>();
  private readonly i18n = inject(I18nService);
  protected readonly labels = computed(() => this.i18n.t().sections[this.section()]);
}
