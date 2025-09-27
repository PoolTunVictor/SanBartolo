import { Routes } from '@angular/router';
import { SpecialReservationsComponent } from './pages/special-reservations/special-reservations.component';

export const routes: Routes = [
{ path: 'Eventos Especiales', component: SpecialReservationsComponent },
{path:'', redirectTo: 'Eventos Especiales', pathMatch: 'full'}
    
];
