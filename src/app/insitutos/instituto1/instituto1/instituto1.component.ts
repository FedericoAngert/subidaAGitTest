import { Component } from '@angular/core';

@Component({
  selector: 'app-instituto1',
  templateUrl: './instituto1.component.html',
  styleUrls: ['./instituto1.component.css'],
  standalone: true
})
export class Instituto1Component {
  public centroPlayamar = {
    nombre: "IES Playamar",
    localidad: "Torremolinos",
    familiasProfesionales: ["Informática y Comunicaciones", "Transporte y Mantenimiento"],
    logoUrl: "assets/logo-ies-playamar.png"
  };

  public centroJacaranda = {
    nombre: "IES Jacaranda",
    localidad: "Churriana",
    familiasProfesionales: ["Hostelería y Turismo"],
    logoUrl: "assets/logo-ies-jacarnada.jpeg"
  };

  public centroActual = this.centroPlayamar;
  cambiarCentro() {
    this.centroActual = this.centroActual === this.centroPlayamar ? this.centroJacaranda : this.centroPlayamar;
  }
}

