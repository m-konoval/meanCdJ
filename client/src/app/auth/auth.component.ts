import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserModel } from './user.model';

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

  private user: UserModel;

  public loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });


  public login() {
    this.authService.authorize(this.loginForm.value).subscribe( (user) => {
      this.user = user;

      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/chat']);
    });
  }


  public goReg() {
    this.router.navigate(['/registration']);
  }

} // AuthComponent
