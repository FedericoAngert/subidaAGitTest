import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instituto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instituto2.component.html',
  styleUrl: './instituto2.component.css'
})
export class Instituto2Component {

  public centros = [
    { nombre: "IES Playamar", localidad: "Torremolinos" },
    { nombre: "IES Jacaranda", localidad: "Churriana" },
    { nombre: "IES Los Boliches", localidad: "Fuengirola" },
  ];

  public pilaEliminados: any[] = [];
  public posicionActual: number = 0;

  get centroActual() {
    return this.centros[this.posicionActual];
  }

  moverAnterior() {
    if (this.posicionActual > 0) {
      this.posicionActual--;
    }
  }

  moverPosterior() {
    if (this.posicionActual < this.centros.length - 1) {
      this.posicionActual++;
    }
  }

  eliminarCentro() {
    if (this.centros.length > 0) {
      const eliminado = this.centros.splice(this.posicionActual, 1)[0];
      this.pilaEliminados.push(eliminado);
      if (this.posicionActual >= this.centros.length && this.centros.length > 0) {
        this.posicionActual--;
      }
    }
  }

  insertarCentro() {
    if (this.pilaEliminados.length > 0) {
      const recuperado = this.pilaEliminados.pop();
      this.centros.splice(this.posicionActual, 0, recuperado);
    }
  }
}
