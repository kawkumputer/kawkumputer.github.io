import { Component, computed, input } from '@angular/core';
import { Link } from '../../content/content.model';
import { profile } from '../../content/profile';
import { isSet } from '../../core/is-set';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../icon/icon';
import { LINK_ICONS } from '../link-icon';

/** Liens vers les réseaux (et l'email s'il est renseigné). Les liens "TODO" sont masqués. */
@Component({
  selector: 'app-social-links',
  imports: [Icon, LocalizePipe],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  /** Afficher le nom du réseau à côté de l'icône. */
  readonly withLabels = input(false);

  protected readonly icons = LINK_ICONS;
  protected readonly links = computed<Link[]>(() => {
    const links = profile.socials.filter((l) => isSet(l.url));
    if (isSet(profile.email)) {
      links.unshift({ kind: 'email', label: profile.email, url: `mailto:${profile.email}` });
    }
    return links;
  });
}
