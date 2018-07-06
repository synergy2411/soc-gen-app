import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  login(username : string, password : string){
    firebase.auth().signInWithEmailAndPassword(username, password);
  }
  register(username : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(username, password)
  }
  constructor() { }

}
