import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Output() isLogout =new EventEmitter<void>
constructor(public firebaseservice: FirebaseService){

}


ngOnInit(): void {

}
logout(){
this.firebaseservice.logout()
this.isLogout.emit()
}
}
