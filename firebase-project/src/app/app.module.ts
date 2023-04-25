import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './service/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBreZcfE8rXgZGy_MaF9XDUE1m_FsiwVVg",
      authDomain: "fir-auth-652bf.firebaseapp.com",
      projectId: "fir-auth-652bf",
      storageBucket: "fir-auth-652bf.appspot.com",
      messagingSenderId: "189216219318",
      appId: "1:189216219318:web:6666da8efdc32b139a4617",
      measurementId: "G-BBCF55EYZS"
    }),
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
