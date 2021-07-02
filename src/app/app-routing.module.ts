import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  { path: 'lista', component: PeliculasComponent},
  { path: 'pagina', component: PaginaComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'detalle/:indice', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
