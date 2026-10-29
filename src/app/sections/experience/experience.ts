import { Component } from '@angular/core';
import { experiences } from '../../content/experience';
import { isSet } from '../../core/is-set';
import { LocalizePipe } from '../../core/localize.pipe';
import { SectionTitle } from '../../shared/section-title/section-title';

@Component({
  selector: 'app-experience',
  imports: [SectionTitle, LocalizePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {
  protected readonly experiences = experiences;
  protected readonly isSet = isSet;
}
