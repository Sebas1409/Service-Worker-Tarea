import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'colores',
    loadChildren: () =>
      import('./ejercicios/colores/colores.routes').then(
        (m) => m.COLORS_ROUTES
      ),
  },
  {
    path: 'contador',
    loadChildren: () =>
      import('./ejercicios/contador/contador.routes').then(
        (m) => m.CONTADOR_ROUTES
      ),
  },
  { path: '', redirectTo: 'colores', pathMatch: 'full' },
];
