import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';
// import { USER_DATA } from './data/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerInfo = "Some Info";
  users : User[] ;

  constructor(public userService : UserService){}
  increase(){
    this.userService.counter++;
  }
  ngOnInit(){
    // this.users = USER_DATA;
    //this.users = this.userService.getUserData();
    this.userService.getUserData()
      .subscribe(data=>this.users = data);
      this.userService.getApiData();
  }
}
