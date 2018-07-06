import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getApiData(){
    this.userService.getApiData()
      .subscribe(data=>console.log("API DATA : ", data))
  }
  login(form: NgForm){
    console.log(form);
    this.authService.login(form.value.username, form.value.password );
  }
  constructor(private authService : AuthService,
        private userService : UserService) { }

  ngOnInit() {
  }

}
