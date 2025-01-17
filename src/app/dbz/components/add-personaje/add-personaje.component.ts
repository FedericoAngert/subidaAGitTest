import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: 'add-personaje.component.html'
})

export class addPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    nombre: '',
    fuerza: 0
  };

  public addPersonaje(): void {

    debugger;

    console.log(this.personaje);
    if ( this.personaje.nombre.length === 0) return;

    this.onNewPersonaje.emit(this.personaje);

    this.personaje = {
      nombre: '',
      fuerza: 0
    };
  }
}
