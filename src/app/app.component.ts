import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Instituto1Component } from './insitutos/instituto1/instituto1/instituto1.component';
import { Instituto2Component } from './insitutos/instituto2/instituto2/instituto2.component';
import { ContadorComponent } from './contador/contador/contador/components/contador/contador.component';

import { heroesModule } from './heroes/heroes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [Instituto1Component, heroesModule],
})
export class AppComponent {

}
