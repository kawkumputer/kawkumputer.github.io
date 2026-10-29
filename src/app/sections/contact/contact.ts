import { Component, inject, isDevMode, signal } from '@angular/core';
import { profile } from '../../content/profile';
import { I18nService } from '../../core/i18n.service';
import { isSet } from '../../core/is-set';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon/icon';
import { SectionTitle } from '../../shared/section-title/section-title';
import { SocialLinks } from '../../shared/social-links/social-links';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [SectionTitle, Icon, SocialLinks, LocalizePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly intro = profile.contact.intro;

  private readonly formspreeId = profile.contact.formspreeId;
  protected readonly configured = isSet(this.formspreeId);
  /** Sans identifiant Formspree, le formulaire n'est montré qu'en développement. */
  protected readonly showForm = this.configured || isDevMode();
  protected readonly status = signal<Status>('idle');

  protected async submit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!this.configured) {
      this.status.set('error');
      return;
    }

    this.status.set('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${this.formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Formspree: ${response.status}`);
      form.reset();
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }
}
