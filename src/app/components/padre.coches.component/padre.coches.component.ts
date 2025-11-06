import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-padre-coches',
  standalone: false,
  templateUrl: './padre.coches.component.html',
  styleUrls: ['./padre.coches.component.css'],
})
export class PadreCochesComponent {
  public coches: Array<Coche>;

  constructor(){
    this.coches = new Array<Coche>();
    this.coches = [
      new Coche("Ford", "Mustang", 400, 60, false),
      new Coche("Volkswagen", "Golf", 300, 40, false),
      new Coche("Lamborgini", "Diablo", 800, 80, false)
    ]
  }
}
