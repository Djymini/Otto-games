import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Accueil',
    path: '',
    loadComponent: () => import('../features/home/pages/home.page'),
  },
  {
    title: 'Connexion',
    path: 'login',
    loadComponent: () => import('../features/auth/pages/login.page'),
  },
  {
    title: 'Inscription',
    path: 'register',
    loadComponent: () => import('../features/auth/pages/register.page'),
  },
];
