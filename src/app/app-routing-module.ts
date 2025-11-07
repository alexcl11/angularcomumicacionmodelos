import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { PadreCochesComponent } from './components/padre.coches.component/padre.coches.component';
import { PadreDeportes } from './components/padre.deportes/padre.deportes';
import { LibreriaComponent } from './components/libreria.component/libreria.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ListaproductosComponent },
  { path: 'padrecoches', component: PadreCochesComponent },
  {path: "padredeportes", component: PadreDeportes},
  {path: "libreria", component: LibreriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
