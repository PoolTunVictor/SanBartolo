import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  categorias: string[] = ["Entradas", "Pastas", "Frituras", "Bebidas", "Hamburguesas", "Frappes","Cafes"];

  menu: { [key: string]: string[] } = {
    "Entradas": ["Bart Pack", "Boneles and chips",  "Jalapeño Poppers", "Cheese Bites", "Dedos de Queso", "Aros de Cebolla", "Papas Fritas", "Papas Gajo"],
    "Pastas": ["Pasta Alfredo", "Pasta Chipotle", "Pasta Poblana", "Pasta Boloñesa", "Pasta Carbonara"],
    "Frituras": ["Alitas", "Boneles", "Tiras Krispy"],
    "Bebidas": ["Te", "Horchata", "Limonada de Fresa", "Coca", "Refrescos de Sabor"],
    "Hamburguesas": ["Hamburguesa Clásica", "Big Cheese", "Boneless Burguer", "Hamburguesa San Bartolo"],
    "Frappes": ["Frappe de Moka", "Frappe de Capuchino", "Frappe de Emperador", "Frappe de Fresa", "Frappe de Nutella", "Frape de Oreo", "Frappe de Queso de Bola"],
    "Cafes": ["Capuchino", "Latte", "Café de Avellanas", "Chocolate"],
  };

  menuDetalles: any = {
    "Entradas": {
      "Bart Pack": {
        descripcion: "Combinación perfecta para compartir con amigos.",
        ingredientes: "5 alitas del sabor de tu preferencia, 5 boneles del sabor de tu preferencia, dedos de queso, aros de cebolla, cheese bite, 500g de papas fritas, 500g de papas gajo",
        imagen: "assets/entradas/bart-pack.jpg",
        precio: "$285",

      },
      "Boneles and chips": {
        descripcion: "La combinación clásica que nunca falla.",
        ingredientes: "Boneless (5 piezas) acompañados de papas fritas crujientes. Servido con la salsa de tu prefencia.",
        precio: "$125",
        imagen: "assets/entradas/boneles-chips.jpg"
      },
      "Jalapeño Poppers": {
        descripcion: "El picante perfecto para empezar.",
        ingredientes: "Jalapeños rellenos de queso crema empanizados (5 piezas). Servidos con salsa ranch.",
        precio: "$70",
        imagen: "assets/entradas/jalapeno-poppers.jpg"
      },
      "Cheese Bites": {
        descripcion: "Bocados de queso irresistibles.",
        ingredientes: "Bolitas de queso mozzarella empanizadas (5 piezas).",
        precio: "$60",
        imagen: "assets/entradas/cheese-bites.jpg"
      },
      "Dedos de Queso": {
        descripcion: "Los clásicos dedos de queso que todos aman.",
        ingredientes: "Palitos de queso mozzarella empanizados (5 piezas).",
        precio: "$70",
        imagen: "assets/entradas/dedos-queso.jpg"
      },
      "Aros de Cebolla": {
        descripcion: "Crujientes y deliciosos aros de cebolla.",
        ingredientes: "Aros de cebolla empanizados (8 piezas). Acompañados de salsa ranch.",
        precio: "$60",
        imagen: "assets/entradas/aros-cebolla.jpg"
      },
      "Papas Fritas": {
        descripcion: "Las clásicas papas fritas doradas.",
        ingredientes: "Papas fritas crujientes sazonadas con sal.",
        precio: "$60",
        imagen: "assets/entradas/papas-frita.jpg"
      },
      "Papas Gajo": {
        descripcion: "Papas en gajo con piel, extra crujientes.",
        ingredientes: "Papas en gajo sazonadas con especias italianas. Servidas con dips de la casa.",
        precio: "$65",
        imagen: "assets/entradas/papas-gajo.jpg"
      }
    },
    "Pastas": {
      "Pasta Alfredo": {
        descripcion: "Crema Alfredo italiana auténtica.",
        ingredientes: "Fettuccine con salsa Alfredo cremosa de parmesano, mantequilla y crema. Opción con pollo o camarones.",
        precio: "$125",
        imagen: "assets/pastas/pasta-alfredo.jpg"
      },
      "Pasta Chipotle": {
        descripcion: "Un toque mexicano en tu pasta.",
        ingredientes: "Pasta penne con salsa de chipotle cremosa, pollo desmenuzado y queso parmesano.",
        precio: "$120",
        imagen: "assets/pastas/pasta-chipotle.jpg"
      },
      "Pasta Poblana": {
        descripcion: "El sabor de Puebla en cada bocado.",
        ingredientes: "Pasta con salsa de chile poblano, crema, elote y pollo a la plancha.",
        precio: "$125",
        imagen: "assets/pastas/pasta-poblana.jpg"
      },
      "Pasta Boloñesa": {
        descripcion: "Clásico italiano con carne.",
        ingredientes: "Spaghetti con salsa boloñesa de carne molida, tomate, vino tinto y hierbas italianas.",
        precio: "$120",
        imagen: "assets/pastas/pasta-bolonesa.jpg"
      },
      "Pasta Carbonara": {
        descripcion: "Cremosidad italiana auténtica.",
        ingredientes: "Spaghetti con salsa carbonara de huevo, queso parmesano, panceta y pimienta negra.",
        precio: "$125",
        imagen: "assets/pastas/pasta-carbonara.jpg"
      }
    },
    "Frituras": {
      "Alitas": {
        descripcion: "Alitas de pollo crujientes y sabrosas.",
        ingredientes: "Alitas de pollo crujientes en paquetes de 6pz, 12pz o 18pz acompañadas de delicioso aderezo ranch, ordena a tu antojo.",
        sabores: ["Puedes escoger entre nuestros diferentes sabores: Buffalo", "BBQ", "Mango Habanero", "Teriyaki"],
        precio: "$105",
        imagen: "assets/frituras/alitas.jpg"
      },
      "Boneles": {
        descripcion: "Bocados de pollo sin hueso.",
        ingredientes: "Boneless de pollo en paquetes de 10pz, 15pz y 30pz en salsa de tu elección. Acompañados de dip alfredo.",
        precio: "$125",
        imagen: "assets/frituras/boneles.jpg"
      },
      "Tiras Krispy": {
        descripcion: "Tiras de pollo extra crujientes.",
        ingredientes: "Tiras de pechuga de pollo empanizadas (8 piezas). Servidas con papas fritas y salsas.",
        precio: "$125",
        imagen: "assets/frituras/tiras-krispy.jpg"
      }
    },
    "Bebidas": {
      "Te": {
        descripcion: "Té helado refrescante.",
        ingredientes: "Té negro helado endulzado o sin endulzar. Con limón o durazno.",
        precio: "$20",
        imagen: "assets/bebidas/te.jpg"
      },
      "Horchata": {
        descripcion: "Bebida tradicional mexicana.",
        ingredientes: "Horchata de arroz con canela y vainilla. Refrescante y cremosa.",
        precio: "$20",
        imagen: "assets/bebidas/horchata.jpg"
      },
      "Limonada de Fresa": {
        descripcion: "Limonada con toque de fresa.",
        ingredientes: "Limonada natural con puré de fresas frescas y menta.",
        precio: "$48",
        imagen: "assets/bebidas/limonada-fresa.jpg"
      },
      "Coca": {
        descripcion: "Refresco de cola clásico.",
        ingredientes: "Coca-Cola regular, light o zero. Servida con hielo y limón.",
        precio: "$25",
        imagen: "assets/bebidas/coca.jpg"
      },
      "Refrescos de Sabor": {
        descripcion: "Variedad de refrescos.",
        ingredientes: "Sprite, Fanta, Dr. Pepper o refresco de toronja.",
        precio: "$25",
        imagen: "assets/bebidas/refrescos.jpg"
      }
    },
    "Hamburguesas": {
      "Hamburguesa Clásica": {
        descripcion: "La hamburguesa que nunca pasa de moda.",
        ingredientes: "Carne de res 150g, queso americano, lechuga, jitomate, cebolla y pepinillos. Pan brioche.",
        precio: "$125",
        imagen: "assets/hamburguesas/clasica.jpg"
      },
      "Big Cheese": {
        descripcion: "Para los amantes del queso.",
        ingredientes: "Doble carne, triple queso, cebolla caramelizada y salsa especial. Pan de ajonjolí.",
        precio: "$160",
        imagen: "assets/hamburguesas/big-cheese.jpg"
      },
      "Boneless Burguer": {
        descripcion: "La combinación perfecta.",
        ingredientes: "Carne de res, boneless de pollo, queso pepper jack, lechuga y salsa buffalo.",
        precio: "$180",
        imagen: "assets/hamburguesas/boneeles-burger.jpg"
      },
      "Hamburguesa San Bartolo": {
        descripcion: "Nuestra especialidad de la casa.",
        ingredientes: "Doble carne, chorizo, aguacate, queso Oaxaca, chipotle y cebolla morada.",
        precio: "$190",
        imagen: "assets/hamburguesas/san-bartolo.jpg"
      }
    },
    "Frappes": {
      "Frappe de Moka": {
        descripcion: "Café y chocolate en perfecta armonía.",
        ingredientes: "Café, chocolate, leche, hielo y crema batida. Topping de sirope de chocolate.",
        precio: "$45",
        imagen: "assets/frappes/moka.jpg"
      },
      "Frappe de Capuchino": {
        descripcion: "Espumoso y cremoso.",
        ingredientes: "Café espresso, leche vaporizada, canela y crema batida.",
        precio: "$48",
        imagen: "assets/frappes/capuchino.jpg"
      },
      "Frappe de Emperador": {
        descripcion: "Sabor único y especial.",
        ingredientes: "Mezcla de galletas Emperador, café, leche y crema.",
        precio: "$50",
        imagen: "assets/frappes/emperador.jpg"
      },
      "Frappe de Fresa": {
        descripcion: "Frescura y dulzura natural.",
        ingredientes: "Fresas naturales, leche, hielo y crema batida.",
        precio: "$60",
        imagen: "assets/frappes/fresa.jpg"
      },
      "Frappe de Nutella": {
        descripcion: "El sabor que todos aman.",
        ingredientes: "Nutella, avellanas, leche, café y crema batida.",
        precio: "$70",
        imagen: "assets/frappes/nutella.jpg"
      },
      "Frape de Oreo": {
        descripcion: "Clásico y delicioso.",
        ingredientes: "Galletas Oreo, leche, helado de vainilla y crema batida.",
        precio: "$65",
        imagen: "assets/frappes/oreo.jpg"
      },
      "Frappe de Queso de Bola": {
        descripcion: "Un sabor tradicional único.",
        ingredientes: "Queso de bola, leche condensada, galletas maría y crema.",
        precio: "$80",
        imagen: "assets/frappes/queso-bola.jpg"
      }
    },
    "Cafes": {
      "Capuchino": {
        descripcion: "El balance perfecto.",
        ingredientes: "Café espresso, leche vaporizada y espuma de leche. Polvo de canela opcional.",
        precio: "$60",
        imagen: "assets/cafes/capuchino.jpg"
      },
      "Latte": {
        descripcion: "Suave y cremoso.",
        ingredientes: "Café espresso con leche vaporizada. Opción de vainilla, avellana o caramelo.",
        precio: "$60",
        imagen: "assets/cafes/latte.jpg"
      },
      "Café de Avellanas": {
        descripcion: "Aroma y sabor intenso.",
        ingredientes: "Café espresso con sirope de avellanas y leche vaporizada.",
        precio: "$65",
        imagen: "assets/cafes/avellanas.jpg"
      },
      "Chocolate": {
        descripcion: "Chocolate caliente reconfortante.",
        ingredientes: "Chocolate belga derretido con leche vaporizada. Topping de malvaviscos.",
        precio: "$60",
        imagen: "assets/cafes/chocolate.jpg"
      }
    }
  };

  categoriaSeleccionada: string = "Entradas";
  productoSeleccionado: any = null;
  mostrarModal: boolean = false;

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  verDetalles(categoria: string, producto: string) {
    this.productoSeleccionado = this.menuDetalles[categoria][producto];
    this.productoSeleccionado.nombre = producto;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.productoSeleccionado = null;
  }
}