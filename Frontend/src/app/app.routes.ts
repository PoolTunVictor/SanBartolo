import { Routes } from '@angular/router';
import { ReservacionesComponent } from './pages/reservaciones/reservaciones.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'reservaciones',
    pathMatch: 'full'
  },
  {
    path: 'reservaciones',
    component: ReservacionesComponent
  }
];
