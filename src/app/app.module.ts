import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyD3MtA8s4ieKuyyidHmtJOZb0uMH-vXyRA',
  authDomain: 'contactmanager-d59b3.firebaseapp.com',
  databaseURL: "https://contactmanager-d59b3.firebaseio.com",
  storageBucket: "contactmanager-d59b3.appspot.com",
  // messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
