import { Component } from '@angular/core';
import { education } from '../../content/education';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon/icon';
import { SectionTitle } from '../../shared/section-title/section-title';

@Component({
  selector: 'app-education',
  imports: [SectionTitle, Icon, LocalizePipe],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationSection {
  protected readonly education = education;
}
