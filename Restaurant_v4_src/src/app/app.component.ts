import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant-Dishes';
  constructor(public authService:AuthService){
  }

  logout(){
    this.authService.logOut();
  }
  isLogged(){
    return this.authService.isLoggedIn;
  }
}
