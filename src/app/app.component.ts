import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public titulo = "";

  constructor(
    private firestore: AngularFirestore,
  ) {

  }
  public AgregarPelicula(): void {
    this.firestore.collection('peliculas').add({ titulo: this.titulo });

  }
}


