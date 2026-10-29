import { Component } from '@angular/core';
import { profile } from '../../content/profile';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon/icon';

/** Bandeau citation : texte original + traduction en pulaar (reprend la couverture Facebook). */
@Component({
  selector: 'app-quote',
  imports: [Icon, LocalizePipe],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class Quote {
  protected readonly q = profile.quote;
  protected readonly name = profile.name;
}
