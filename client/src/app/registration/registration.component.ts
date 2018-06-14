import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public regForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    userPassword: new FormControl(),
    checkPasswod: new FormControl(),
  });

  constructor() {}
  ngOnInit() {}

  public singIn() {
    console.log(this.regForm.controls);
  }
}
