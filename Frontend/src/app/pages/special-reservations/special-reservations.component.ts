import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-special-reservations',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './special-reservations.component.html',
  styleUrls: ['./special-reservations.component.css']
})
export class SpecialReservationsComponent {
  events = [
    {
      name: 'San Valentín',
      date: '14 de Febrero',
      description: 'Cena romántica con menú especial',
      image: 'assets/cena.png',
      packages: [
        { name: 'Pareja', entry: 'Entrada romántica', main: 'Filete en salsa', drink: 'Vino tinto', dessert: 'Fresas con chocolate', price: 1200, image: 'assets/pareja.png', noAvailability: '' },
        { name: 'Amigos', entry: 'Ensalada gourmet', main: 'Pasta al pesto', drink: 'Vino', dessert: 'Tiramisú', price: 650, image: 'assets/Amigos.png', noAvailability: '' }
      ],
      menu: [
        { name: 'Crema de espárragos', image: 'assets/CremaEsp.png' },
        { name: 'Salmón a la parrilla', image: 'assets/Salmon.png' },
        { name: 'Brownie con helado', image: 'assets/Brownie.png' }
      ]
    },
    {
      name: 'Posada Navideña',
      date: '20 de Diciembre',
      description: 'Cena especial y ambiente festivo para compartir con familia o amigos.',
      image: 'assets/Posada.png',
      packages: [
        { name: 'Familiar', entry: 'Canapés', main: 'Pavo relleno', drink: 'Ponche', dessert: 'Pastel de frutas', price: 2500,  image: 'assets/PFamiliar.png', noAvailability: ''  },
        { name: 'Amigos', entry: 'Tabla de botanas', main: 'Pizza navideña', drink: 'Cerveza artesanal', dessert: 'Galletas decoradas', price: 1800,  image: 'assets/Botanas.png', noAvailability: '' }
      ],
      menu: [
        { name: 'Pavo relleno', image: 'assets/Menu1.png' },
        { name: 'Ponche', image: 'assets/Menu2.png' },
        { name: 'Pastel de frutas', image: 'assets/Menu3.png' },
        { name: 'Galletas decoradas', image: 'assets/Menu4.png' }
      ]
    },
    {
      name: 'Día de Reyes',
      date: '06 de Enero',
      description: "Celebra la llegada de los Reyes Magos con una cena tradicional.",
      image: 'assets/DíadeReyes.png',
      packages: [
        { name: 'Adulto', entry: 'Rosca de reyes', main: 'Pasta', drink: 'Ponche de frutas', dessert: 'Pastel de nuez', price: 950,image: 'assets/ReyesA.png', noAvailability: '' },
        { name: 'Niño', entry: 'Mini rosca', main: 'Hamburguesa', drink: 'Refresco', dessert: 'Galletas decoradas', price: 450, image: 'assets/ReyesN.png', noAvailability: '' }
      ],
      menu: [
        { name: 'Hamburguesa', image: 'assets/MenuR1.png' },
        { name: 'Refresco', image: 'assets/MenuR2.png' },
        { name: 'Rosca de reyes', image: 'assets/MenuR3.png' }
      ]
    },
    {
      name: 'Halloween',
      date: '31 de Octubre',
      description: 'Fiesta temática de Halloween con cena espeluznante, ideal para compartir con familia, amigos o en pareja.',
      image: 'assets/Halloween.png',
      packages: [
        { name: 'Familiar', entry: 'Pasta', main: 'Lasaña', drink: 'Ponche de frutos rojos', dessert: 'Galletas de Halloween', price: 1500,image: 'assets/HFamiliar.png', noAvailability: '' },
        { name: 'Amigos', entry: 'Tabla de botanas', main: 'Hamburguesas', drink: 'Coctel', dessert: 'Cupcakes', price: 1200,image: 'assets/HAmigos.png', noAvailability: '' },
        { name: 'Pareja', entry: 'Ensalada de calabaza', main: 'Salmón glaseado con salsa de arándanos rojos', drink: 'Vino tinto o cóctel', dessert: 'Cócteles con frutas oscuras', price: 2000, image: 'assets/HPareja.png', noAvailability: '' }
      ],
      menu: [
        { name: 'Lasaña', image: 'assets/MenuH1.png' },
        { name: 'Ponche de frutos rojos', image: 'assets/MenuH2.png' },
        { name: 'Vino tinto o cóctel', image: 'assets/MenuH3.png' },
        { name: 'Fondue de chocolate', image: 'assets/MenuH4.png' }
      ]
    }
  ];

  selectedEvent: any = null;
  selectedPackage: any = null;
  showReservationModal: boolean = false;
  reservationData = { name: '', people: '', time: '', type: '' };
  confirmationMessage: string | null = null;
  isError: boolean = false;
  reservations: any[] = [];
  maxTables = 11;
  maxChairs = 42;

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

  reserve(pkg: any) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    if (currentMinutes > 1080) { // 6:00 PM en minutos
      pkg.noAvailability = "Solo se hacen reservaciones en un horario de 12:00 AM a 6:00 PM.";
      setTimeout(() => pkg.noAvailability = '', 5000);
      return;
    }

    const reservedTables = this.reservations.length;
    const reservedChairs = this.reservations.reduce((sum, r) => sum + r.people, 0);
    const availableTables = this.maxTables - reservedTables;
    const availableChairs = this.maxChairs - reservedChairs;

    if (availableTables <= 0 || availableChairs <= 0) {
      pkg.noAvailability = "❌ No hay disponibilidad en este momento.";
      setTimeout(() => pkg.noAvailability = '', 5000);
      return;
    }

    this.selectedPackage = pkg;
    this.showReservationModal = true;
    this.reservationData = { name: '', people: '', time: '', type: pkg.name };
  }

  confirmReservation() {
    if (!this.reservationData.name || !this.reservationData.people || !this.reservationData.time) {
      this.confirmationMessage = "⚠️ Por favor, completa todos los campos antes de confirmar la reservación.";
      this.isError = true;
      return;
    }

    const people = Number(this.reservationData.people);
    const reservedTables = this.reservations.length;
    const reservedChairs = this.reservations.reduce((sum, r) => sum + r.people, 0);
    const availableTables = this.maxTables - reservedTables;
    const availableChairs = this.maxChairs - reservedChairs;

    if (availableTables <= 0 || people > availableChairs) {
      this.confirmationMessage = "❌ No hay disponibilidad en este momento.";
      this.isError = true;
      setTimeout(() => this.confirmationMessage = null, 5000);
      return;
    }

    const newReservation = {
      name: this.reservationData.name,
      people,
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      toleranceDate: new Date(new Date().getTime() + 15 * 60 * 1000)
    };

    this.reservations.push(newReservation);

    this.confirmationMessage = `
✅ Reservación confirmada para ${this.reservationData.name}.
Personas: ${people}
Hora reservada: ${this.reservationData.time}
Tolerancia: 15 minutos
    `;
    this.isError = false;

    setTimeout(() => this.closeModal(), 4000);
  }

  closeModal() {
    this.showReservationModal = false;
    this.reservationData = { name: '', people: '', time: '', type: '' };
    this.selectedPackage = null;
    this.confirmationMessage = null;
    this.isError = false;
  }
}
