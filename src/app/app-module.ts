import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { PadreCochesComponent } from './components/padre.coches.component/padre.coches.component';
import { HijoCocheComponent } from './components/hijo.coche.component/hijo.coche.component';
import { PadreDeportes } from './components/padre.deportes/padre.deportes';
import { HijoDeporte } from './components/hijo.deporte/hijo.deporte';
import { ComicComponent } from './components/comic.component/comic.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    HomeComponent,
    MenuComponent,
    PadreCochesComponent,
    HijoCocheComponent,
    PadreDeportes,
    HijoDeporte,
    ComicComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
