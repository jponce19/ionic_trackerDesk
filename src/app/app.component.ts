import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trackerDesk';
  lat = 51.678418;
  lng = 7.809007; 

  init = false;

  taxistas: ITaxista[]=[];
  constructor(db: AngularFirestore) {

    db.collection('usuarios').valueChanges()
      .subscribe( ( data: ITaxista[] )=>{

          this.taxistas = data;

          if( !this.init){
             this.lat = data[0].lat;
             this.lng = data[0].lng; 
             this.init = true;
          }

      });
  }

}


interface ITaxista{
  nombre: string,
  clave: string,
  lat: number,
  lng: number
}
