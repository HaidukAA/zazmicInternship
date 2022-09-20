import { Component, DoCheck, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements DoCheck {

  button ='LOGIN';
  helperUserNameText = 'Up to 40 symbols';
  name = 'text';
  labelName = 'Username';
  labelPassword = 'Password';
  passwordType = 'password';
  helperUserPasswordText = '8 symbols or more';
  userSVG = 'assets/images/svg/login/user.svg';
  passwordSVG = 'assets/images/svg/login/key.svg';
  typeButton = 'submit';
  disable: boolean = true;
  buttonSVG = 'assets/images/svg/login/login.svg';

  form: UntypedFormGroup;

  constructor(private localStorege:  AuthService,
    private router: Router, 
    ) {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(40)
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });   
  }
  
  ngDoCheck(): void {
    if (this.form.invalid) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }
  
  onSubmit(){
    const data = this.form.value;

    if (this.form.invalid) {
      return;
    }
    this.localStorege.clearToken();
    this.localStorege.removeToken(data);
    this.localStorege.setToken('token', data);
    this.localStorege.getToken(data);
    console.log('data', data);
    this.form.reset()
  }
  

}
