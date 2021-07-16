import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peliculas, PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass']
})
export class DetalleComponent implements OnInit {

  //public pelicula: Peliculas
  constructor(
    private peliculaService: PeliculasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const index = this.route.snapshot.params.index;
    //this.pelicula = this.peliculaService.getPeliculaIndex(index);
  }

}
