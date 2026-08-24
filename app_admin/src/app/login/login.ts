import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html'
})
export class Login {
  public formError = '';

  public credentials = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  public onLoginSubmit(): void {
  this.formError = '';

  if (!this.credentials.email || !this.credentials.password) {
    this.formError = 'All fields are required, please try again';
    return;
  }

  this.doLogin();
}

private doLogin(): void {
  const user = new User();
  user.email = this.credentials.email;

  this.authenticationService.login(
    user,
    this.credentials.password
  );

  this.router.navigateByUrl('/');
}
}