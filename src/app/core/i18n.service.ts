import { Injectable, computed, signal } from '@angular/core';
import { Lang, Localized } from '../content/content.model';
import { ui } from '../content/ui';

@Injectable({ providedIn: 'root' })
export class I18nService {
  /** Langue courante, fixée par la route (/fr ou /en). */
  readonly lang = signal<Lang>('fr');
  /** Libellés d'interface dans la langue courante. */
  readonly t = computed(() => ui[this.lang()]);

  resolve(value: Localized): string {
    return typeof value === 'string' ? value : value[this.lang()];
  }
}
