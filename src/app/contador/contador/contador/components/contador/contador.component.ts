import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  // imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  title = '4.1-contador';
  public equis: number = 0;

  incrementar(): void{
    this.equis += 1;
  }

  decrementar(): void{
    this.equis -= 1;
  }

  resetear(): void {
    this.equis = 0
  }
}
