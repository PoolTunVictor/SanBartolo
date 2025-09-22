import { Injectable } from '@angular/core';
import { Reservacion } from '../interface/reservacion.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  private reservaciones: Reservacion[] = [];

  getReservaciones(): Reservacion[] {
    return this.reservaciones;
  }

  addReservacion(res: Reservacion) {
    this.reservaciones.push(res);
  }
}