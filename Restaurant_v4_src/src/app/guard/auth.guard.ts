import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../auth.service';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService:AuthService,public db:DatabaseService,public router:Router){};


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.afAuth.authState.pipe(
        take(1),
        map(user => {
          if (user === null){
            alert("Musisz być zalogowany!");
            this.router.navigate(['/signIn']);
            return false;
          }
          const routeRoles = route.data && route.data['roles'];
          const userData = user;
          this.db.getUsers().subscribe(() => {
            if (this.authService.userDetails === userData){
              if (!this.authService.checkIfHasRole(userData.uid, routeRoles)) {
                alert("Brak uprawnień.");
                this.router.navigate(['/home']);
                return false;
              }
              return true;
            }
          return true;
          })
          return true;
          }
        )
        )
  }
  
}
