import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  standalone: false,
  templateUrl: './hijo.deporte.html',
  styleUrl: './hijo.deporte.css',
})
export class HijoDeporte {
  @Input() deporte!: string;
  @Output() seleccionarDeporteFavorito: EventEmitter<any> = new EventEmitter()

  seleccionarComoFavorito(): void{
      this.seleccionarDeporteFavorito.emit(this.deporte);
  }
}
