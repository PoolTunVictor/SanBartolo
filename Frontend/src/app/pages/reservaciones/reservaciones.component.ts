import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reservacion } from '../../core/interface/reservacion.interface';
import { ReservacionService } from '../../core/service/reservacion.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CalendarioComponent } from '../../shared/components/calendario/calendario.component';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    CalendarioComponent
  ],
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent {
  reservaciones: Reservacion[] = [];

  horariosBase: string[] = [
    '5:00 - 5:30',
    '5:30 - 6:00',
    '6:00 - 6:30',
    '6:30 - 7:00'
  ];

  nueva: Reservacion = { 
    nombre: '', 
    zona: 'Terraza', 
    horario: this.horariosBase[0], 
    personas: 1, 
    dia: ''   
  };

  constructor(private reservacionService: ReservacionService) {
    this.reservaciones = this.reservacionService.getReservaciones();
  }

  seleccionarDia(dia: number) {
    this.nueva.dia = dia.toString();
    this.nueva.horario = this.getHorariosDisponibles()[0] || ''; // asigna el primero libre
  }

  getHorariosDisponibles(): string[] {
    if (!this.nueva.dia) return this.horariosBase;

    const ocupados = this.reservaciones
      .filter(r => r.dia === this.nueva.dia)
      .map(r => r.horario);

    return this.horariosBase.filter(h => !ocupados.includes(h));
  }

  guardar() {
    if (!this.nueva.dia) {
      alert('Selecciona un día en el calendario antes de guardar.');
      return;
    }

    // validar que el horario aún esté disponible
    const ocupado = this.reservaciones.some(r => 
      r.dia === this.nueva.dia && r.horario === this.nueva.horario
    );

    if (ocupado) {
      alert(`El horario ${this.nueva.horario} ya está reservado en el día ${this.nueva.dia}.`);
      return;
    }

    this.reservacionService.addReservacion({ ...this.nueva });
    this.reservaciones = this.reservacionService.getReservaciones();

    // reset
    this.nueva = { 
      nombre: '', 
      zona: 'Terraza', 
      horario: this.horariosBase[0], 
      personas: 1, 
      dia: '' 
    };
  }
}