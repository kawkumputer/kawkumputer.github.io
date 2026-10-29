import { Pipe, PipeTransform, inject } from '@angular/core';
import { Localized } from '../content/content.model';
import { I18nService } from './i18n.service';

/** `{{ value | l10n }}` affiche un texte `{ fr, en }` dans la langue courante. */
@Pipe({ name: 'l10n', pure: false })
export class LocalizePipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(value: Localized): string {
    return this.i18n.resolve(value);
  }
}
