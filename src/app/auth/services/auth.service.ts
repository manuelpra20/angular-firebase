import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async resetPassword(email: string): Promise<void> {

    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch (error){
      console.log(error);
    }
}

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string){

        try{
          const result = await this.afAuth.signInWithEmailAndPassword(
            email, password
            );
          return result;
        }
        catch (error){
          console.log(error);
        }
  }

  async register(email: string, password: string){
        try{
          const result = await this.afAuth.createUserWithEmailAndPassword(
            email, password
            );
          this.sendVerificationEmail();
          return result;
        }
        catch (error){
          console.log(error);
        }
  }

  async logout(){
        try{
          await this.afAuth.signOut();
        }
        catch (error){
          console.log(error);
        }
  }

}
