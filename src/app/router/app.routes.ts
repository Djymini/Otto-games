import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Accueil',
    path: '',
    loadComponent: () => import('../features/home/pages/home.page'),
  },
];
