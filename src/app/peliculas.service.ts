import { Injectable } from '@angular/core';

export interface Peliculas{
  titulo: string;
  portada: string;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private listaPelicula: Peliculas[] = []; 

  constructor() { }

  public agregarPelicula(pelicula:Peliculas){
    this.listaPelicula.push(pelicula);
  }
  public obtenerPeliculas(){
    return this.listaPelicula;
  }
}
