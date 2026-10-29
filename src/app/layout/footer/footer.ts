import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../content/profile';
import { I18nService } from '../../core/i18n.service';
import { Icon } from '../../shared/icon/icon';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly name = profile.name;
  protected readonly year = new Date().getFullYear();
}
