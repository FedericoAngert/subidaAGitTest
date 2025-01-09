import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public personajes: Personaje[] = [
    {
     nombre: "Goku",
     fuerza: 1000000,
    },
    {
     nombre: "asd",
     fuerza: 0
    }

 ];

 public onNewPersonaje(personaje: Personaje): void {
   this.personajes.push(personaje);
 }

 public onDeletePersonaje(index: number): void {
   const eliminado: Personaje[] = this.personajes.splice(index, 1)
   this.personajes.splice(index, 1);
 }


}
