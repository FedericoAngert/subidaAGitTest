import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { AppComponent } from './app/app.component';

// import { HeroeComponent } from './app/heroes/heroe/heroe/heroe.component';}
// import { Instituto1Component } from './app/insitutos/instituto1/instituto1/instituto1.component';
// import { Instituto2Component } from './app/insitutos/instituto2/instituto2/instituto2.component';
// import { ContadorComponent } from './app/contador/contador/contador/components/contador/contador.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
