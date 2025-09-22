import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservacion } from '../../../core/interface/reservacion.interface';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  @Input() reservaciones: Reservacion[] = [];
  @Input() mes: string = 'Septiembre';
  @Output() diaSeleccionado = new EventEmitter<number>();

  reservasDelDia: Reservacion[] = [];

  dias: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  seleccionar(dia: number) {
    this.reservasDelDia = this.getReservas(dia); // guarda todas las reservas de ese día
    this.diaSeleccionado.emit(dia);
  }

  cerrarDetalle() {
    this.reservasDelDia = [];
  }

  getReservas(dia: number): Reservacion[] {
    return this.reservaciones.filter(r => Number(r.dia) === dia);
  }
}
