import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musivibez';
  constructor(public us:UserService){}

  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
  }
}
