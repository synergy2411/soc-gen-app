import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(form: NgForm){
    console.log(form);
    this.authService.login(form.value.username, form.value.password );
  }
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
