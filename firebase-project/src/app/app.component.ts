import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase-project';
  isSignIn=false;
  constructor(public firebaseservice: FirebaseService){
    
  }
  
  ngOnInit(){
if(localStorage.getItem('user')!==null)
   this.isSignIn=true
   else
   this.isSignIn=false
  }
  async onSignUp(email:string,password:string){
  await this.firebaseservice.signup(email,password)
  if(this.firebaseservice.isLoggedIn)
  this.isSignIn=true
  }
  async onSignIn(email:string,password:string){
    await this.firebaseservice.signin(email,password)
    if(this.firebaseservice.isLoggedIn)
    this.isSignIn=true
    }
    handleLogout(){
      this.isSignIn=false
      
    }

}
