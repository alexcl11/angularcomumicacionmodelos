import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent{
  @Input() comic!: Comic;
  @Output() seleccionarComicFavorito: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();
  seleccionarComoFavorito():void{
    this.seleccionarComicFavorito.emit(this.comic)
  }
  
  eliminarComicLibreria(): void{
    this.eliminarComic.emit(this.comic)
  }

}
