import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./components/pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'our-fleets',
    pathMatch: 'full',
    loadComponent: () => import('./components/Main/fleet/fleet.component').then(m => m.MainFleetComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./components/Main/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: 'Services',
    loadComponent: () => import('./components/Main/services/services.component').then(m => m.ServicesComponent)
  },
];
