import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: 'lista.component.html'
})

export class listaComponent {

  @Input('miLista')
  public listaPersonajes: Personaje[] = [
    {
      nombre: "Default",
      fuerza: 0
    }
  ];

  @Output()
  public onDeletePersonaje: EventEmitter<number> = new EventEmitter();


  public deletePersonaje(index: number): void {
    this.onDeletePersonaje.emit(index);
  }
}
