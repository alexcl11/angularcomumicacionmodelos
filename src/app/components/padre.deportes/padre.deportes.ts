import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  templateUrl: './padre.deportes.html',
  styleUrl: './padre.deportes.css',
})
export class PadreDeportes {
  public deportes: Array<string>;
  public deporteFavorito: string;

  // NECESITAMOS UN METODO QUE RECIBIRA EVENT QUE VA A SER CUALQUIER TIPADO (any)
  seleccionarDeporteFavorito(event:any): void{
      this.deporteFavorito = event
    }
  constructor(){
    this.deportes = ["Curling", "Bolos", "Petanca","Golf","Marcha Atlética"]
    this.deporteFavorito = ""
  }

  
}
