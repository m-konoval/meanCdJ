import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });


  public login() {
    this.authService.authorize(this.loginForm.value).subscribe( (user) => {
      localStorage.setItem('userName', user.userName);
      this.router.navigate(['/']);
    });
  }


  public goReg() {
    this.router.navigate(['/registration']);
  }
} // AuthComponent
