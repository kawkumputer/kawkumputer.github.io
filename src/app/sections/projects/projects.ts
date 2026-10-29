import { Component, inject } from '@angular/core';
import { profile } from '../../content/profile';
import { projects } from '../../content/projects';
import { I18nService } from '../../core/i18n.service';
import { isSet } from '../../core/is-set';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon/icon';
import { LINK_ICONS } from '../../shared/link-icon';
import { SectionTitle } from '../../shared/section-title/section-title';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, Icon, LocalizePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly t = inject(I18nService).t;
  protected readonly icons = LINK_ICONS;
  /** Les liens "TODO" sont retirés ici, une fois pour toutes. */
  protected readonly projects = projects.map((p) => ({
    ...p,
    links: p.links.filter((l) => isSet(l.url)),
  }));
  protected readonly github = profile.socials.find((s) => s.kind === 'github')?.url;
}
