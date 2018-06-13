import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  CHAT_URL = '/massages';

  public nameControl: FormControl = new FormControl();

  constructor(private router: Router) { }

  public login() {
    localStorage.setItem('user_name', this.nameControl.value);
    this.router.navigate([this.CHAT_URL]);
  }
}
