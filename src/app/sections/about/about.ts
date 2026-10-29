import { Component } from '@angular/core';
import { profile } from '../../content/profile';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon/icon';
import { SectionTitle } from '../../shared/section-title/section-title';

@Component({
  selector: 'app-about',
  imports: [SectionTitle, Icon, LocalizePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly about = profile.about;
}
