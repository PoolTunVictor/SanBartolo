import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

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
  description: 'Cena especial y ambiente festivo para compartir con familia o amigos.',
  packages: [
    { name: 'Familiar', entry: 'Canapés', main: 'Pavo relleno', drink: 'Ponche', dessert: 'Pastel de frutas', price: 2500 },
    { name: 'Amigos', entry: 'Tabla de botanas', main: 'Pizza navideña', drink: 'Cerveza artesanal', dessert: 'Galletas decoradas', price: 1800 }
  ],
  menu: ['Pavo relleno', 'Canapés', 'Ponche', 'Pastel de frutas', 'Pizza navideña', 'Galletas decoradas']
    },
    {
      name: 'Día de reyes',
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
    { 
      name: 'Familiar', entry: 'Dedos de bruja (salchichas con salsa especial)', main: 'Lasaña monstruo', drink: 'Ponche de frutas sangriento', dessert: 'Galletas decoradas de Halloween', price: 1500 
    },
    { 
      name: 'Amigos', entry: 'Tabla de botanas terroríficas', main: 'Hamburguesas momia con papas', drink: 'Coctel sangriento', dessert: 'Cupcakes fantasma', price: 1200 
    },
    { 
      name: 'Pareja', entry: 'Ensalada de calabaza con nueces', main: 'Filete mignon con puré negro', drink: 'Vino tinto o coctel temático', dessert: 'Fondue de chocolate con malvaviscos', price: 2000 
    }
  ],
   menu: [
    'Lasaña monstruo','Ponche de frutas','Galletas decoradas de Halloween','Vino tinto o coctel temático','Fondue de chocolate con malvaviscos'
  ]
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
