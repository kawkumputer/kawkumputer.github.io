import { Component, DOCUMENT, inject, isDevMode, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from './core/i18n.service';
import { reportTodos } from './core/todo-check';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <a class="skip-link" href="#main" (click)="skipToMain($event)">{{ t().skipLink }}</a>
    <app-header />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    @defer (hydrate on viewport) {
      <app-footer />
    }
  `,
})
export class App {
  protected readonly t = inject(I18nService).t;
  private readonly doc = inject(DOCUMENT);

  constructor() {
    if (isDevMode()) afterNextRender(reportTodos);
  }

  /** Le lien d'évitement déplace le focus sans changer d'URL (base href oblige). */
  protected skipToMain(event: Event): void {
    event.preventDefault();
    const main = this.doc.getElementById('main');
    main?.focus();
    main?.scrollIntoView();
  }
}
