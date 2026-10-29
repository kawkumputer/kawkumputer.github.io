import { Component } from '@angular/core';
import { skillGroups } from '../../content/skills';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon/icon';
import { SectionTitle } from '../../shared/section-title/section-title';

@Component({
  selector: 'app-skills',
  imports: [SectionTitle, Icon, LocalizePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly groups = skillGroups;
}
