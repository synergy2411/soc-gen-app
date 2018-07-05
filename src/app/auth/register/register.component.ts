import { Component, OnInit } from '@angular/core';
import { FormControl, 
    FormGroup, 
    FormBuilder, 
    Validators } from '@angular/forms';

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
  }
  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
   }

  ngOnInit() {
  }

}
