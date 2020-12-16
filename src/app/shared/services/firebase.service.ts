import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  usuarios: FirebaseListObservable<any[]>;
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then()
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
  getUsuarios(){
    this.firebaseAuth.()
    localStorage.removeItem('user')
  }
}