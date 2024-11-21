import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Instituto2Component } from "../insitutos/instituto2/instituto2/instituto2.component";
import { HeroeComponent } from "./components/heroe/heroe/heroe.component";


@NgModule({
  declarations: [
    Instituto2Component, HeroeComponent
  ],
  exports: [
    Instituto2Component, HeroeComponent
  ],
  imports: [CommonModule]
})
export class heroesModule {

}
