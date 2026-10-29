import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../content/profile';
import { I18nService } from '../../core/i18n.service';
import { isSet } from '../../core/is-set';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon/icon';
import { SocialLinks } from '../../shared/social-links/social-links';
import { startNetwork } from './network';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, RouterLink, Icon, SocialLinks, LocalizePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly p = profile;
  protected readonly hasCv = isSet(profile.cvUrl);

  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('network');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      // Démarré une fois la page chargée et le navigateur inactif, pour ne pas retarder l'affichage.
      let stop = () => {};
      let cancelled = false;
      const start = () => {
        const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 300));
        idle(() => {
          if (!cancelled) stop = startNetwork(this.canvas().nativeElement);
        });
      };
      if (document.readyState === 'complete') start();
      else window.addEventListener('load', start, { once: true });
      destroyRef.onDestroy(() => {
        cancelled = true;
        window.removeEventListener('load', start);
        stop();
      });
    });
  }
}
