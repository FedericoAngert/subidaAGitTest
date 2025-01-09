import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { listaComponent } from './components/lista/lista.component';
import { addPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainPageComponent, listaComponent, addPersonajeComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
