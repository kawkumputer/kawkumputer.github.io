import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fr' },
  { path: 'fr', component: HomePage, data: { lang: 'fr' } },
  { path: 'en', component: HomePage, data: { lang: 'en' } },
  { path: '**', redirectTo: 'fr' },
];
