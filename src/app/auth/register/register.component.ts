import { Component, OnInit } from '@angular/core';
import { FormControl, 
    FormGroup, 
    FormBuilder, 
    Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamation
  ]);
  registerForm : FormGroup;

  hasExclamation(input : FormControl){
    const excl = input.value.indexOf("!") >= 0;
    return excl ? null : {'needExclamation' : true}
  }
  register(){
    console.log(this.registerForm);
    this.authService.register(this.registerForm.value.username,
      this.registerForm.value.password );
  }
  constructor(private fb : FormBuilder, private authService : AuthService) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
   }

  ngOnInit() {
  }

}
