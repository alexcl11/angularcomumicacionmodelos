import { Component, Input } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  templateUrl: './hijo.coche.component.html',
  styleUrls: ['./hijo.coche.component.css'],
})
export class HijoCocheComponent {
  @Input() coche!: Coche;
  public mensaje: string;
  
  constructor(){
    this.mensaje = "";
  }

  comporbarEstado(): boolean{
    if(this.coche.estado){
      this.mensaje = "El coche está arrancado!!"
      return true
    } else {
      this.mensaje = "El coche está apagado!!"
      this.coche.velocidad = 0
      return false
    }
  }

  encenderCoche(): void{
    this.coche.estado = !this.coche.estado
    this.comporbarEstado()
  }
  
  acelerarCoche(): void{
    if(this.comporbarEstado()){
      this.coche.velocidad += this.coche.aceleracion 
    }else{
      alert("¿a donde vas? Que estoy apagado!!")
    }
  }
} 
