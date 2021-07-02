import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PaginaComponent } from './pagina/pagina.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {path: 'pelicula', component: PeliculasComponent},
  {path: 'pagina', component : PaginaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PaginaComponent,
    FormularioComponent,
    DetalleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.fireBase)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule] 
})
export class AppModule { }
