import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-special-reservations',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './special-reservations.component.html',
  styleUrls: ['./special-reservations.component.css']
})
export class SpecialReservationsComponent {
  events = [
    {
      name: 'San Valentín',
      date: '14 de Febrero',
      description: 'Cena romántica con menú especial',
      packages: [
        { name: 'Pareja', entry: 'Entrada romántica', main: 'Filete en salsa', drink: 'Vino tinto', dessert: 'Fresas con chocolate', price: 1200 },
        { name: 'Individual', entry: 'Ensalada gourmet', main: 'Pasta al pesto', drink: 'Refresco', dessert: 'Tiramisú', price: 650 }
      ],
      menu: ['Crema de espárragos', 'Salmón a la parrilla', 'Brownie con helado']
    },
    {
      name: 'Posada Navideña',
      date: '20 de Diciembre',
      description: 'Fiesta navideña con buffet y música en vivo',
      packages: [
        { name: 'Adulto', entry: 'Botana navideña', main: 'Pavo relleno', drink: 'Ponche', dessert: 'Pastel de nuez', price: 950 },
        { name: 'Niño', entry: 'Mini pizza', main: 'Hamburguesa', drink: 'Refresco', dessert: 'Galletas navideñas', price: 450 }
      ],
      menu: ['Tamales', 'Ponche', 'Tarta de manzana']
    }
  ];

  selectedEvent: any = null;

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

  reserve(pkg: any) {
    alert(`Reservaste el paquete ${pkg.name} para el evento ${this.selectedEvent.name}`);
  }
}
