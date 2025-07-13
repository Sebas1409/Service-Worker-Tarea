import { Routes } from '@angular/router';

export const COLORS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./selector/selector.component').then((m) => m.SelectorComponent),
  },
];
