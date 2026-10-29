import { Component, computed, input } from '@angular/core';
import { ICONS, IconName } from './icons';

/** Icône décorative : le texte accessible doit être porté par l'élément parent. */
@Component({
  selector: 'app-icon',
  template: `
    <svg
      [attr.viewBox]="def().viewBox"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      [attr.fill]="def().fill ? 'currentColor' : 'none'"
      [attr.stroke]="def().fill ? null : 'currentColor'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @for (d of def().paths; track $index) {
        <svg:path [attr.d]="d" />
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      line-height: 0;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  protected readonly def = computed(() => ICONS[this.name()]);
}
