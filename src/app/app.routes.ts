import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en' },
  { path: 'en', component: HomePage, data: { lang: 'en' } },
  { path: 'fr', component: HomePage, data: { lang: 'fr' } },
  { path: '**', redirectTo: 'en' },
];
