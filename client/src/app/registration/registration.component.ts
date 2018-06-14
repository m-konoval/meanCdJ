import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup = new FormGroup({
    userNameControl: new FormControl(),
    userEmailControl: new FormControl(),
    userPasswordControl: new FormControl(),
    checkPasswodControl: new FormControl(),
  });

  constructor() {}
  ngOnInit() {}

  public registrationSubmit() {
    console.log(this.registrationForm.controls);
  }
}
