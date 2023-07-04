

import { Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map } from 'rxjs';

@Injectable ()
export class LoginService {

    constructor(private authService: AngularFireAuth){}

    login(email: string, password: string){
        //return signInWithEmailAndPassword(this.authService, email, password);
        return new Promise((resolve, reject) =>{
          this.authService.signInWithEmailAndPassword(email,password)
          .then(
            datos => resolve(datos),
            error => reject(error)
          );
        });
    }

    getAuth(){
      return this.authService.authState.pipe(
        map( auth => auth)
      )
    }

    logout(){
      this.authService.signOut();
    }

    registrarse(email: string, password: string){
      return new Promise((resolve, reject) =>{
        this.authService.createUserWithEmailAndPassword(email,password)
        .then(datos => resolve(datos),
              error => reject(error))
      })
    }

}