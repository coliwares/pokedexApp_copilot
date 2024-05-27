// app.routes.ts
import { Routes } from '@angular/router';
import { BuscadorComponentComponent } from './buscador-component/buscador-component.component';

export const routes: Routes = [
  { path: 'search', component: BuscadorComponentComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];
