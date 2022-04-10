import { Injectable,NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseService } from './database.service';
import { User } from './user';
import firebase from "firebase/compat/app";
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  persistanceList = [
    auth.Auth.Persistence.LOCAL,
    auth.Auth.Persistence.SESSION,
    auth.Auth.Persistence.NONE]
    
  isLoggedIn = false;
  currentUser: Observable<firebase.User | null | undefined>;
  userDetails: firebase.User | null | undefined = null;
  usersList: User[] | undefined;
  userRoles: string[] | undefined;
  currentPersistence: number | undefined;
  
  constructor(public afAuth: AngularFireAuth,private router:Router,private ngZone:NgZone,private db:DatabaseService) {
    this.currentUser = this.afAuth.authState;
    this.afAuth.authState.subscribe( user => {
      this.userDetails = user;
    })
    this.db.getUsers().subscribe(e => {
      this.usersList = e;
    })
    this.db.getPersistence().subscribe(e=>{
      this.currentPersistence = e.value;
      this.afAuth.setPersistence(this.persistanceList[e.value]);
    })
  }

  logOut(){
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['signIn']);
      this.isLoggedIn = false;
    })
  }

  signUp(email:string,password:string,name:string,roles:string[]){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['home']);
        // @ts-ignore
        result.user.updateProfile(
          {displayName: name}
        )
        this.setUserData(result.user, roles, name);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  setUserData(user: any, roles: string[], name: any) {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: name,
      dishesOrdered: [],
      orderHist: [],
      isBanned: false,
      roles: roles
    }
    this.db.addUser(userData);
  }

  signIn(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
          this.isLoggedIn = true;
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  checkIfHasRole(userID: string, roles: string[]){
    if (this.usersList){
      for(let u of this.usersList){
        if(u.uid===userID){
          for(let r of roles){
            if (u.roles.includes(r)){
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  justClient(userID:string):boolean{
    if(this.usersList){
      let r = this.usersList.find(user => user.uid === userID)!.roles;
      if(r.length===1 && r[0]==="Client"){
        return true;
      }
    }
    return false;
  }

  getRoles(userID:string): string[]{
    let result :string[] = [];
    if(this.usersList){
      return this.usersList.find(user => user.uid === userID)!.roles;
    }
    return result;
  }
  
  checkIfUserBought(name: string){
    const dishesOrdered = this.usersList!.find(user => user.uid === this.userDetails!.uid)!.dishesOrdered;
    return !!(dishesOrdered && dishesOrdered.includes(name));
  }
  getUserHist(){
    const userID = this.userDetails!.uid;
    let result = [];
    if (this.usersList) {
      let orderHist = this.usersList!.find(user => user.uid === userID)!.orderHist
      if (orderHist){
        for (let item of this.usersList!.find(user => user.uid === userID)!.orderHist){
          if (item){ result.push(item); }
        }
      }
      return result;
    }
    return []
  }

  checkIfBanned(id: string) {
    if (this.usersList){
      return this.usersList.find(user => user.uid === id)!.isBanned;
    }
    return false;
  }
}
