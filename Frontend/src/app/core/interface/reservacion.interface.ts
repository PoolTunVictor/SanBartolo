export interface Reservacion {
  nombre: string;
  zona: 'Terraza' | 'Dentro del local';
  horario: string;
  personas: number;
  dia: string; // Lunes, Martes, etc.
}