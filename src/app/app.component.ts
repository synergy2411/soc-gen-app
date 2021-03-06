import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';
import * as firebase from 'firebase';

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
    firebase.initializeApp({
      apiKey: "AIzaSyAqdZNtqEobRa4HUpmhPdA_QjcDM3ultzg",
      authDomain: "soc-gen-app.firebaseapp.com"
    });
    // this.users = USER_DATA;
    //this.users = this.userService.getUserData();
    this.userService.getUserData()
      .subscribe(data=>this.users = data);
      // this.userService.getApiData()
      //   .subscribe(
      //     data=>this.users = data,
      //     err=>console.log(err),
      //     ()=>console.log("Completed")
      //   )
  }
}
