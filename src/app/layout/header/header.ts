import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANGS } from '../../content/content.model';
import { SectionId, ui } from '../../content/ui';
import { I18nService } from '../../core/i18n.service';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly langs = LANGS;
  protected readonly langNames = { fr: ui.fr.langName, en: ui.en.langName };
  protected readonly sections: SectionId[] = [
    'about',
    'skills',
    'experience',
    'projects',
    'education',
    'contact',
  ];

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      // Écouteur passif hors template : seul le signal change, pas de cycle de détection inutile.
      // Pas de lecture immédiate de scrollY : elle forcerait un layout juste après l'hydratation.
      const onScroll = () => this.scrolled.set(window.scrollY > 16);
      window.addEventListener('scroll', onScroll, { passive: true });
      destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });
  }
}
