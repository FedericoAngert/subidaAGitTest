import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent implements OnInit{
  public nombre: string = "Goku";
  public edad: number = 35;

  constructor() {}

  ngOnInit(): void {

  }
}
