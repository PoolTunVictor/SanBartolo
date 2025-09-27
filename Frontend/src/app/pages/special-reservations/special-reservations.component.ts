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
        { name: 'Pareja', entry: 'Entrada romántica', main: 'Filete en salsa', drink: 'Vino tinto', dessert: 'Fresas con chocolate', price: 1200, image: 'assets/pareja.png'
 },
        { name: 'Amigos', entry: 'Ensalada gourmet', main: 'Pasta al pesto', drink: 'Vino', dessert: 'Tiramisú', price: 650, image: 'assets/Amigos.png' }
      ],
      menu: ['Crema de espárragos', 'Salmón a la parrilla', 'Brownie con helado']
    },
    {
      name: 'Posada Navideña',
      date: '20 de Diciembre',
      description: 'Cena especial y ambiente festivo para compartir con familia o amigos.',
      image: 'assets/Posada.png',
      packages: [
        { name: 'Familiar', entry: 'Canapés', main: 'Pavo relleno', drink: 'Ponche', dessert: 'Pastel de frutas', price: 2500,  image: 'assets/PFamiliar.png'  },
        { name: 'Amigos', entry: 'Tabla de botanas', main: 'Pizza navideña', drink: 'Cerveza artesanal', dessert: 'Galletas decoradas', price: 1800,  image: 'assets/Botanas.png' }
      ],
      menu: ['Pavo relleno', 'Canapés', 'Ponche', 'Pastel de frutas', 'Pizza navideña', 'Galletas decoradas']
    },
    {
      name: 'Día de Reyes',
      date: '06 de Enero',
      description: "Celebra la llegada de los Reyes Magos con una cena tradicional.",
      packages: [
        { name: 'Adulto', entry: 'Rosca de reyes', main: 'Pasta', drink: 'Ponche de frutas', dessert: 'Pastel de nuez', price: 950 },
        { name: 'Niño', entry: 'Mini rosca', main: 'Hamburguesa', drink: 'Refresco', dessert: 'Galletas decoradas', price: 450 }
      ],
      menu: ['Pasta', 'Refresco', 'Rosca de reyes']

    },
    {
      name: 'Halloween',
      date: '31 de Octubre',
      description: 'Fiesta temática de Halloween con cena espeluznante, ideal para compartir con familia, amigos o en pareja.',
      packages: [
        { name: 'Familiar', entry: 'Dedos de bruja', main: 'Lasaña monstruo', drink: 'Ponche sangriento', dessert: 'Galletas de Halloween', price: 1500 },
        { name: 'Amigos', entry: 'Tabla de botanas terroríficas', main: 'Hamburguesas momia', drink: 'Coctel sangriento', dessert: 'Cupcakes fantasma', price: 1200},
        { name: 'Pareja', entry: 'Ensalada de calabaza', main: 'Filete mignon con puré negro', drink: 'Vino tinto o cóctel', dessert: 'Fondue de chocolate', price: 2000 }
      ],
      menu: ['Lasaña monstruo','Ponche sangriento','Galletas de Halloween','Vino tinto o cóctel','Fondue de chocolate']
    }
    
  ];

  selectedEvent: any = null;
  selectedPackage: any = null;
  showReservationModal: boolean = false;

  reservationData = { name: '', people: 1, time: '', type: '' };
  confirmationMessage: string | null = null;
  isError: boolean = false;

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

  reserve(pkg: any) {
    this.selectedPackage = pkg;
    this.showReservationModal = true;
    this.reservationData = { name: '', people: 1, time: '', type: pkg.name };
    this.confirmationMessage = null;
    this.isError = false;
  }

  confirmReservation() {
    if (!this.reservationData.name || !this.reservationData.people || !this.reservationData.time) {
      this.confirmationMessage = "⚠️ Por favor, completa todos los campos antes de confirmar la reservación.";
      this.isError = true;
      return;
    }

    this.confirmationMessage = `
${this.reservationData.name}, tu reservación (${this.selectedPackage.name}) ha sido confirmada 🎉
Evento: ${this.selectedEvent.name}
Personas: ${this.reservationData.people}
Hora: ${this.reservationData.time}
    `;
    this.isError = false;

    setTimeout(() => {
      this.closeModal();
    }, 3000);
  }

  closeModal() {
    this.showReservationModal = false;
    this.reservationData = { name: '', people: 1, time: '', type: '' };
    this.selectedPackage = null;
    this.confirmationMessage = null;
    this.isError = false;
  }
}
