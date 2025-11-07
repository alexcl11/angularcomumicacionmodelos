import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
  // DEBEMOS DECLARAR EL SERVICIO PARA PODER RECUPERARLO DENTRO DE UN CONSTRUCTOR
  // providers: [ServiceComics]
})
export class LibreriaComponent implements OnInit{
  public comics!: Array<Comic>;
  public comicFavorito!: Comic;
  @ViewChild("cajanombre") cajaNombre!: ElementRef
  @ViewChild("cajadescripcion") cajaDescripcion!: ElementRef
  @ViewChild("cajaimagen") cajaImagen!: ElementRef

  constructor(private _service: ServiceComics){}

  ngOnInit(): void {
    this.comics = this._service.getComics()
  }

  seleccionarComicFavorito(event:any): void{
      this.comicFavorito = event
  }

  eliminarComic(event:any):void{
    for (const comic of this.comics) {
        if(comic == event){
          this.comics.splice(this.comics.indexOf(comic), 1)
        }
    }
  }

  crearComic(): void{
    let nombre = this.cajaNombre.nativeElement.value
    let descripcion = this.cajaDescripcion.nativeElement.value
    let imagen = this.cajaImagen.nativeElement.value
    let comic = new Comic(nombre, imagen, descripcion)
    this.comics.push(comic)
  }
}
