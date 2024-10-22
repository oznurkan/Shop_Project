import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private acountService: AccountService ){

  }
  title = 'shop';

  isLoggedIn(){
    return this.acountService.isLoggedIn();
  }

  logOut(){
    this.acountService.logOut();
  }
}
