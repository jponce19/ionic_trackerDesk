import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component'; 
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBeTe5_ummkgMC28pZGOJwk9PEYdhq8hng'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
