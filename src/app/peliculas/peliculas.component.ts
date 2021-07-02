import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.sass']
})
export class PeliculasComponent implements OnInit {

  public PeliculaGenero = ['Anime', 'Fantasia', 'Carreras', 'Subtitulada', 'Misterio', 'Suspenso', 'Terror', 'La que no se puede mencionar'];
  public Almacen = [{
    titulo: 'asd',
    portada: 'asd',
    genero: 'asd'
  }];
  public titulo: string = '';
  public portada: string = '';
  public genero: string = '';


  constructor(
    private peliculaService: PeliculasService
  ) { }

  ngOnInit(): void { 
    this.Almacen = this.peliculaService.obtenerPeliculas(); 
  }

  public addNewItem() {
    //this.Almacen.push({ titulo: this.titulo, portada: this.portada, genero: this.genero });
    this.peliculaService.agregarPelicula({titulo: this.titulo, portada: this.portada, genero: this.genero});
  }
}
