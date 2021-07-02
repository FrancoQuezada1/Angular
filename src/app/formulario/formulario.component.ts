import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  public PeliculaGenero = ['Anime', 'Fantasia', 'Carreras', 'Subtitulada', 'Misterio', 'Suspenso', 'Terror', 'La que no se puede mencionar'];

  public titulo: string = '';
  public portada: string = '';
  public genero: string = '';


  constructor(
    private peliculaService: PeliculasService
  ) { }

  ngOnInit(): void {
  }
  public addNewItem() {
    //this.Almacen.push({ titulo: this.titulo, portada: this.portada, genero: this.genero });
    this.peliculaService.agregarPelicula({ titulo: this.titulo, portada: this.portada, genero: this.genero });
  }
}