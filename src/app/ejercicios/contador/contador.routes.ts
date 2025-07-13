import { Routes } from '@angular/router';

export const CONTADOR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contador.component').then((m) => m.ContadorComponent),
  },
];
