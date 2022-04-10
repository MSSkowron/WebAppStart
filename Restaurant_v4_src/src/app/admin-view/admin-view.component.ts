import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import firebase from "firebase/compat/app";
import auth = firebase.auth;
import { DatabaseService } from '../database.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})

export class AdminViewComponent implements OnInit {
  persistenceNames = ['LOCAL', 'SESSION', 'NONE'];
  persistanceList = [
    auth.Auth.Persistence.LOCAL,
    auth.Auth.Persistence.SESSION,
    auth.Auth.Persistence.NONE]

  constructor(public authService:AuthService,public db:DatabaseService) { }

  ngOnInit(): void {
  }

  setPersistence(option: number){
    this.authService.afAuth.setPersistence(this.persistanceList[option]);
    this.db.setPersistence(option);
  }

  changeRoles(user: User, role: string){
    let currentRoles = user.roles;
    if (!currentRoles){
      this.db.updateUserRoles(user.uid, [role]);
    } else {
      const index = currentRoles.indexOf(role, 0);
      if (index > -1){
        currentRoles.splice(index, 1);
      } else {
        currentRoles.push(role);
      }
      let resultRoles = this.createNewRoleArray(currentRoles);
      this.db.updateUserRoles(user.uid, resultRoles);
    }
  }

  createNewRoleArray(array: any){
    let result = [];
    for (let item of array){
      if (item) {
        result.push(item);
      }
    }
    return result;
  }

  changeBanStatus(user: User) {
    this.db.updateBanStatus(user.uid, !user.isBanned);
  }

}
