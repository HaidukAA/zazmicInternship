import { Component, DoCheck, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomValidatorsService } from '../../services/custom-validators.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements DoCheck {

  button ='REGISTER';
  helperMailText = 'Example: markus.w@gmail.com';
  mail = 'text';
  labelMail = 'Email';
  mailSVG = 'assets/images/svg/login/mail.svg';

  labelPassword = 'Password';
  passwordType = 'password';
  helperUserPasswordText = '8 symbols or more';
  passwordSVG = 'assets/images/svg/login/key.svg';

  labelConfirmPassword = 'Confirm password';
  passwordConfirmType = 'confirmPassword';
  helperConfirmUserPasswordText = 'Repeate password';

  typeButton = 'submit';
  disable: boolean = true;
  buttonSVG = 'assets/images/svg/login/login.svg';


  form: UntypedFormGroup;

  constructor(
    private localStorege: AuthService,
    private router: Router,
    private CustomValidators: CustomValidatorsService
    ) {
    this.form = new UntypedFormGroup({

      mail: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),},
      [CustomValidatorsService.MatchValidator('password', 'confirmPassword')]
    );
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
    this.form.reset();
    this.router.navigateByUrl('/app/feed?typeView=default');
  }

  get passwordMatchError() {
    return (
      this.form.getError('mismatch') &&
      this.form.get('confirmPassword')?.touched
    );
  }
}
