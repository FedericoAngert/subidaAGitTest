import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ContadorModule } from "./contador/contador/contador/components/contador.module";

import { AppComponent } from "./app.component";
import { HeroeComponent } from "./heroes/heroe/heroe/heroe.component";
import { Instituto1Component } from "./insitutos/instituto1/instituto1/instituto1.component";
import { Instituto2Component } from "./insitutos/instituto2/instituto2/instituto2.component";
import { ContadorComponent } from "./contador/contador/contador/components/contador/contador.component";
import { Heroe } from '../../../ejemplos/src/topics/extenderClases';

@NgModule({
  declarations: [
    // AppComponent,
  ],
  imports: [
    BrowserModule,
    // ContadorComponent
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
